import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { getResult } from '../services/resultsService';
import { getTestEngine } from '../testEngines';
import LoadingSpinner from '../components/LoadingSpinner';
import InterestCapabilityComparison from '../components/InterestCapabilityComparison';
import HollandHexagonChart from '../components/HollandHexagonChart';

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
  const hasCapability = Boolean(result.capabilityScores && engine);

  const interestPercentages = engine
    ? Object.fromEntries(engine.categoryOrder.map((cat) => [cat, engine.interestToPercent(result.scores[cat] ?? 0)]))
    : {};
  const capabilityPercentages = hasCapability
    ? Object.fromEntries(
        engine.categoryOrder.map((cat) => [cat, engine.capabilityToPercent(result.capabilityScores[cat] ?? 0)])
      )
    : null;

  const chartSeries = [{ key: 'interest', values: interestPercentages }];
  if (hasCapability) chartSeries.push({ key: 'capability', values: capabilityPercentages });

  return (
    <div className="page">
      <div className="container results-container">
        <div className="results-layout">
          <div className="card results-header">
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
          </div>

          <div className="card results-sidebar">
            {engine && (
              <div className="hexagon-chart-wrap">
                <HollandHexagonChart
                  categories={engine.categoryOrder}
                  categoryLabels={engine.categoryLabels}
                  series={chartSeries}
                />
                {hasCapability && (
                  <div className="comparison-legend">
                    <span>
                      <i className="legend-dot legend-dot-interest" /> Minat
                    </span>
                    <span>
                      <i className="legend-dot legend-dot-capability" /> Kemampuan
                    </span>
                  </div>
                )}
              </div>
            )}

            {hasCapability && <InterestCapabilityComparison result={result} engine={engine} />}
          </div>

          <div className="card results-main">
            {entry && (
              <>
                <h3 style={{ marginTop: 0, marginBottom: 4 }}>Rekomendasi Peran/Karier</h3>
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

            {engine && (
              <div className="outlook-section" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: 4 }}>Ada Peran Incaran Lain?</h3>
                <p className="form-hint" style={{ marginTop: 0, marginBottom: 12 }}>
                  Cek seberapa selaras peran pilihan Anda sendiri dengan profil ini.
                </p>
                <Link to={`/hasil/${result.id}/cocok`} className="btn btn-secondary">
                  Cek Kecocokan Peran Lain
                </Link>
              </div>
            )}
          </div>
        </div>

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
  );
}
