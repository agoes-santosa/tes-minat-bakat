import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { getResult } from '../services/resultsService';
import { getTestEngine } from '../testEngines';
import LoadingSpinner from '../components/LoadingSpinner';

export default function ResultsPage() {
  const { resultId } = useParams();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await getResult(currentUser.uid, resultId);
        if (!cancelled) setResult(data);
      } catch {
        if (!cancelled) setError('Hasil tidak ditemukan.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [currentUser.uid, resultId]);

  if (loading) return <LoadingSpinner />;

  if (error || !result) {
    return (
      <div className="page">
        <div className="container">
          <div className="error-box">{error}</div>
        </div>
      </div>
    );
  }

  const engine = getTestEngine(result.testId);
  const entry = engine?.resultsLookup[result.hollandCodeKey];
  const maxScore = Math.max(...Object.values(result.scores));

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 640 }}>
        <div className="card">
          <p className="progress-label" style={{ textAlign: 'center', marginBottom: 0 }}>
            Kode Holland Anda
          </p>
          <div className="result-code">{result.hollandCodeOrdered}</div>
          {entry && (
            <>
              <div className="result-title">{entry.title}</div>
              <p className="result-description">{entry.description_id}</p>
            </>
          )}

          <div className="score-bars">
            {Object.entries(result.scores).map(([category, score]) => (
              <div className="score-row" key={category}>
                <span>{engine?.categoryLabels[category] ?? category}</span>
                <div className="score-row-track">
                  <div
                    className="score-row-fill"
                    style={{ width: `${maxScore === 0 ? 0 : (score / maxScore) * 100}%` }}
                  />
                </div>
                <span>{score}</span>
              </div>
            ))}
          </div>

          {entry && (
            <>
              <h3 style={{ marginBottom: 4 }}>Rekomendasi Peran/Karier</h3>
              <p className="form-hint" style={{ marginTop: 0, marginBottom: 12 }}>
                Klik salah satu peran untuk melihat jurusan dan rekomendasi kampus di Indonesia.
              </p>
              <ul className="occupation-list">
                {entry.occupations.map((role) => (
                  <li key={role}>
                    <Link to={`/hasil/${result.id}/peran/${encodeURIComponent(role)}`} className="occupation-link">
                      {role}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="actions-row">
            <button type="button" className="btn btn-secondary" onClick={() => navigate('/riwayat')}>
              Lihat Riwayat
            </button>
            <Link to="/" className="btn btn-primary">
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
