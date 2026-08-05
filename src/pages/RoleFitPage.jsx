import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { getResult } from '../services/resultsService';
import { getTestEngine } from '../testEngines';
import LoadingSpinner from '../components/LoadingSpinner';
import HollandHexagonChart from '../components/HollandHexagonChart';

function readinessTier(percent) {
  if (percent >= 70) return { tier: 'cerah', label: 'Kuat' };
  if (percent >= 40) return { tier: 'stabil', label: 'Cukup' };
  return { tier: 'waspada', label: 'Perlu Dikembangkan' };
}

export default function RoleFitPage() {
  const { resultId } = useParams();
  const { currentUser } = useAuth();

  const [result, setResult] = useState(null);
  const [loadError, setLoadError] = useState('');
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState('');
  const [matchedOccupation, setMatchedOccupation] = useState(null);
  const [searchError, setSearchError] = useState('');

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const data = await getResult(currentUser.uid, resultId);
        if (!cancelled) setResult(data);
      } catch {
        if (!cancelled) setLoadError('Hasil tidak ditemukan.');
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

  if (loadError || !result) {
    return (
      <div className="page">
        <div className="container">
          <div className="error-box">{loadError}</div>
        </div>
      </div>
    );
  }

  const engine = getTestEngine(result.testId);
  const hasCapability = Boolean(result.capabilityScores && engine);

  function handleSearch(event) {
    event.preventDefault();
    const normalized = query.trim().toLowerCase();
    const found = engine.allOccupationNames.find((name) => name.toLowerCase() === normalized);
    if (!found) {
      setMatchedOccupation(null);
      setSearchError('Peran tidak ditemukan. Pilih salah satu peran dari daftar saran yang muncul saat mengetik.');
      return;
    }
    setSearchError('');
    setMatchedOccupation(found);
  }

  let comparisonBlock = null;
  if (matchedOccupation && engine) {
    const codeKey = engine.occupationToCode[matchedOccupation];
    const codeEntry = engine.resultsLookup[codeKey];
    const targetProfile = engine.targetProfileForCode(codeKey);

    const interestPercentages = Object.fromEntries(
      engine.categoryOrder.map((cat) => [cat, engine.interestToPercent(result.scores[cat] ?? 0)])
    );
    const interestAlignment = engine.computeAlignment(targetProfile, interestPercentages);

    let capabilityPercentages = null;
    let capabilityAlignment = null;
    if (hasCapability) {
      capabilityPercentages = Object.fromEntries(
        engine.categoryOrder.map((cat) => [cat, engine.capabilityToPercent(result.capabilityScores[cat] ?? 0)])
      );
      capabilityAlignment = engine.computeAlignment(targetProfile, capabilityPercentages);
    }

    const requiredTypes = codeKey.split('').sort(
      (a, b) => engine.categoryOrder.indexOf(a) - engine.categoryOrder.indexOf(b)
    );

    const chartSeries = [
      { key: 'target', values: targetProfile },
      { key: 'interest', values: interestPercentages },
    ];
    if (hasCapability) chartSeries.push({ key: 'capability', values: capabilityPercentages });

    const requiredRows = requiredTypes.map((cat) => ({
      category: cat,
      label: engine.categoryLabels[cat],
      interest: Math.round(interestPercentages[cat]),
      capability: hasCapability ? Math.round(capabilityPercentages[cat]) : null,
      interestTier: readinessTier(interestPercentages[cat]),
    }));

    const weakest = [...requiredRows].sort((a, b) => a.interest - b.interest)[0];
    const strongest = [...requiredRows].sort((a, b) => b.interest - a.interest)[0];
    const isBalanced = strongest.interest - weakest.interest < 15;
    const averageRequired = Math.round(
      requiredRows.reduce((sum, row) => sum + row.interest, 0) / requiredRows.length
    );

    comparisonBlock = (
      <div className="outlook-section">
        <p className="progress-label" style={{ marginBottom: 0 }}>
          Kecocokan dengan
        </p>
        <h2 style={{ marginTop: 4, marginBottom: 4 }}>{matchedOccupation}</h2>
        <p className="form-hint" style={{ marginTop: 0 }}>
          Kode Holland peran ini: <strong>{codeEntry?.title ?? codeKey}</strong>
        </p>

        <div className="hexagon-chart-wrap">
          <HollandHexagonChart
            categories={engine.categoryOrder}
            categoryLabels={engine.categoryLabels}
            series={chartSeries}
          />
          <div className="comparison-legend">
            <span>
              <i className="legend-dot legend-dot-target" /> Dibutuhkan Peran
            </span>
            <span>
              <i className="legend-dot legend-dot-interest" /> Minat Anda
            </span>
            {hasCapability && (
              <span>
                <i className="legend-dot legend-dot-capability" /> Kemampuan Anda
              </span>
            )}
          </div>
        </div>

        <div className="fit-score-row">
          <div className="fit-score">
            <span className="fit-score-value">{interestAlignment.overall}%</span>
            <span className="fit-score-label">Keselarasan Minat</span>
          </div>
          {hasCapability && (
            <div className="fit-score">
              <span className="fit-score-value">{capabilityAlignment.overall}%</span>
              <span className="fit-score-label">Keselarasan Kemampuan</span>
            </div>
          )}
        </div>

        <p className="form-hint" style={{ marginBottom: 12 }}>
          Persentase ini adalah indikator kasar berdasarkan kesamaan pola RIASEC, bukan pengukuran psikometrik
          formal.
        </p>

        <h3 style={{ marginBottom: 8 }}>Bidang yang Dibutuhkan Peran Ini</h3>
        <div style={{ overflowX: 'auto' }}>
          <table className="gap-table">
            <thead>
              <tr>
                <th>Bidang</th>
                <th>Minat Anda</th>
                {hasCapability && <th>Kemampuan Anda</th>}
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {requiredRows.map((row) => (
                <tr key={row.category}>
                  <td>{row.label}</td>
                  <td>{row.interest}%</td>
                  {hasCapability && <td>{row.capability}%</td>}
                  <td>
                    <span className={`outlook-badge outlook-${row.interestTier.tier}`}>
                      {row.interestTier.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="outlook-tip" style={{ marginTop: 16 }}>
          {isBalanced ? (
            averageRequired >= 70 ? (
              <>
                Minat Anda pada ketiga bidang yang dibutuhkan peran ini <strong>merata dan kuat</strong> — Anda
                sudah cukup siap dari sisi minat untuk menjadi {matchedOccupation}.
              </>
            ) : (
              <>
                Minat Anda pada ketiga bidang yang dibutuhkan peran ini <strong>merata, namun belum menjadi
                fokus utama</strong> — wajar bila {matchedOccupation} belum terasa seperti panggilan Anda saat
                ini.
              </>
            )
          ) : (
            <>
              <strong>Sudah kuat di:</strong> {strongest.label} ({strongest.interest}% minat).{' '}
              <strong>Perlu dikembangkan di:</strong> {weakest.label} ({weakest.interest}% minat) untuk lebih
              siap menjadi {matchedOccupation}.
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 640 }}>
        <Link to={`/hasil/${resultId}`} className="btn btn-secondary" style={{ marginBottom: 20 }}>
          ← Kembali ke Hasil
        </Link>

        <div className="card">
          <h1 style={{ marginTop: 0 }}>Cek Kecocokan dengan Peran Lain</h1>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Punya peran incaran yang tidak muncul di rekomendasi Anda? Ketik nama perannya untuk melihat seberapa
            selaras peran itu dengan profil minat dan kemampuan Anda.
          </p>

          <form onSubmit={handleSearch} className="form-group">
            <label htmlFor="role-query">Nama Peran/Karier</label>
            <input
              id="role-query"
              type="text"
              list="occupation-options"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="contoh: Psikolog, Aktuaris, Arsitek"
              autoComplete="off"
            />
            <datalist id="occupation-options">
              {engine?.allOccupationNames.map((name) => <option key={name} value={name} />)}
            </datalist>
            <p className="form-hint">
              Pencocokan hanya tersedia untuk peran yang ada di database kami (peran yang sama dengan yang
              direkomendasikan di halaman hasil).
            </p>
            <button type="submit" className="btn btn-primary" style={{ marginTop: 8 }}>
              Cek Kecocokan
            </button>
          </form>

          {searchError && <div className="error-box">{searchError}</div>}

          {comparisonBlock}
        </div>
      </div>
    </div>
  );
}
