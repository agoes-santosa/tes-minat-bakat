import { useMemo, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { getTestEngine } from '../testEngines';
import { saveResult } from '../services/resultsService';
import ProgressBar from '../components/ProgressBar';
import CategoryStepper from '../components/CategoryStepper';
import QuestionChecklistItem from '../components/QuestionChecklistItem';
import CapabilityRatingItem from '../components/CapabilityRatingItem';

function groupByCategory(questions) {
  const groups = new Map();
  for (const question of questions ?? []) {
    if (!groups.has(question.category)) groups.set(question.category, []);
    groups.get(question.category).push(question);
  }
  return groups;
}

export default function TestRunnerPage() {
  const { testId } = useParams();
  const engine = getTestEngine(testId);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const [capabilityAnswers, setCapabilityAnswers] = useState({});
  const [step, setStep] = useState(0);
  const [maxStepReached, setMaxStepReached] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const questionsByCategory = useMemo(() => groupByCategory(engine?.questions), [engine]);
  const capabilityByCategory = useMemo(() => groupByCategory(engine?.capabilityQuestions), [engine]);

  if (!engine) return <Navigate to="/404" replace />;

  const hasCapability = Boolean(engine.capabilityQuestions);
  const categories = engine.categoryOrder;
  const currentCategory = categories[step];
  const currentQuestions = questionsByCategory.get(currentCategory) ?? [];
  const currentCapabilityQuestions = capabilityByCategory.get(currentCategory) ?? [];
  const isLastStep = step === categories.length - 1;

  const answered = engine.countAnswered(answers) + (hasCapability ? engine.countCapabilityAnswered(capabilityAnswers) : 0);
  const total = engine.questions.length + (hasCapability ? engine.capabilityQuestions.length : 0);

  const isCurrentPageComplete =
    currentQuestions.every((question) => typeof answers[question.id] === 'boolean') &&
    currentCapabilityQuestions.every((question) => typeof capabilityAnswers[question.id] === 'number');

  function handleAnswer(questionId, value) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleCapabilityAnswer(questionId, value) {
    setCapabilityAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function goToStep(index) {
    setStep(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleBack() {
    if (step > 0) goToStep(step - 1);
  }

  function handleNext() {
    if (!isCurrentPageComplete) return;
    if (isLastStep) {
      handleSubmit();
      return;
    }
    const next = step + 1;
    setMaxStepReached((prev) => Math.max(prev, next));
    goToStep(next);
  }

  async function handleSubmit() {
    if (!engine.isComplete(answers)) return;
    if (hasCapability && !engine.isCapabilityComplete(capabilityAnswers)) return;
    setSubmitting(true);
    setError('');
    try {
      const scores = engine.computeScores(answers);
      const { ordered, key } = engine.getCode(scores);
      const payload = { testId, scores, ordered, key };
      if (hasCapability) {
        payload.capabilityScores = engine.computeCapabilityScores(capabilityAnswers);
      }
      const resultId = await saveResult(currentUser.uid, payload);
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

        <CategoryStepper
          categories={categories}
          labels={engine.categoryLabels}
          currentIndex={step}
          maxReachedIndex={maxStepReached}
          onStepClick={goToStep}
        />

        <div className="card">
          <h2 className="category-heading" style={{ marginTop: 0 }}>
            Bagian {step + 1} dari {categories.length}: {engine.categoryLabels[currentCategory]}
          </h2>
          {currentQuestions.map((question) => (
            <QuestionChecklistItem
              key={question.id}
              question={question}
              value={answers[question.id]}
              onChange={handleAnswer}
            />
          ))}

          {currentCapabilityQuestions.length > 0 && (
            <>
              <h3 className="capability-heading">Seberapa yakin Anda dengan kemampuan Anda di bidang ini?</h3>
              <p className="capability-subheading">
                Ini terpisah dari minat di atas — nilai kepercayaan diri Anda pada kemampuan, bukan seberapa suka
                Anda melakukannya.
              </p>
              {currentCapabilityQuestions.map((question) => (
                <CapabilityRatingItem
                  key={question.id}
                  question={question}
                  value={capabilityAnswers[question.id]}
                  onChange={handleCapabilityAnswer}
                  scale={engine.capabilityScale}
                />
              ))}
            </>
          )}
        </div>

        {error && <div className="error-box" style={{ marginTop: 16 }}>{error}</div>}

        <div className="submit-bar submit-bar-row">
          <button type="button" className="btn btn-secondary" onClick={handleBack} disabled={step === 0}>
            Kembali
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!isCurrentPageComplete || submitting}
            onClick={handleNext}
          >
            {submitting
              ? 'Menyimpan...'
              : !isCurrentPageComplete
                ? `Jawab semua pertanyaan di bagian ini`
                : isLastStep
                  ? 'Lihat Hasil'
                  : 'Lanjut'}
          </button>
        </div>
      </div>
    </div>
  );
}
