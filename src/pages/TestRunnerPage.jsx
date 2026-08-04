import { useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { getTestEngine } from '../testEngines';
import { saveResult } from '../services/resultsService';
import ProgressBar from '../components/ProgressBar';
import QuestionChecklistItem from '../components/QuestionChecklistItem';

export default function TestRunnerPage() {
  const { testId } = useParams();
  const engine = getTestEngine(testId);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const questionsByCategory = useMemo(() => {
    if (!engine) return [];
    const groups = new Map();
    for (const question of engine.questions) {
      if (!groups.has(question.category)) groups.set(question.category, []);
      groups.get(question.category).push(question);
    }
    return [...groups.entries()];
  }, [engine]);

  if (!engine) return <Navigate to="/404" replace />;

  const answered = engine.countAnswered(answers);
  const total = engine.questions.length;
  const complete = engine.isComplete(answers);

  function handleAnswer(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  async function handleSubmit() {
    if (!complete) return;
    setSubmitting(true);
    setError('');
    try {
      const scores = engine.computeScores(answers);
      const { ordered, key } = engine.getCode(scores);
      const resultId = await saveResult(currentUser.uid, { testId, scores, ordered, key });
      navigate(`/hasil/${resultId}`);
    } catch {
      setError('Gagal menyimpan hasil tes. Silakan coba lagi.');
      setSubmitting(false);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <h1 style={{ marginBottom: 4 }}>Tes SDS Holland (RIASEC)</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 24 }}>
          Tandai "Ya" jika Anda tertarik atau senang melakukan aktivitas berikut, tanpa memikirkan pendidikan atau
          penghasilan yang dibutuhkan.
        </p>

        <ProgressBar answered={answered} total={total} />

        <div className="card">
          {questionsByCategory.map(([category, questions]) => (
            <div key={category}>
              <h2 className="category-heading">{engine.categoryLabels[category]}</h2>
              {questions.map((question) => (
                <QuestionChecklistItem
                  key={question.id}
                  question={question}
                  value={answers[question.id]}
                  onChange={handleAnswer}
                />
              ))}
            </div>
          ))}
        </div>

        {error && <div className="error-box" style={{ marginTop: 16 }}>{error}</div>}

        <div className="submit-bar">
          <button
            type="button"
            className="btn btn-primary btn-block"
            disabled={!complete || submitting}
            onClick={handleSubmit}
          >
            {submitting ? 'Menyimpan...' : complete ? 'Lihat Hasil' : `Jawab semua pertanyaan (${answered}/${total})`}
          </button>
        </div>
      </div>
    </div>
  );
}
