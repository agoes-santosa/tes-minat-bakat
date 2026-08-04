import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { listResults } from '../services/resultsService';
import { getTestEngine } from '../testEngines';
import LoadingSpinner from '../components/LoadingSpinner';

function formatDate(timestamp) {
  if (!timestamp?.toDate) return '';
  return timestamp.toDate().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function HistoryPage() {
  const { currentUser } = useAuth();
  const [results, setResults] = useState(null);

  useEffect(() => {
    listResults(currentUser.uid).then(setResults);
  }, [currentUser.uid]);

  if (results === null) return <LoadingSpinner />;

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 640 }}>
        <h1>Riwayat Hasil Tes</h1>

        {results.length === 0 ? (
          <div className="card empty-state">Anda belum memiliki riwayat hasil tes.</div>
        ) : (
          results.map((result) => {
            const engine = getTestEngine(result.testId);
            const entry = engine?.resultsLookup[result.hollandCodeKey];
            return (
              <Link key={result.id} to={`/hasil/${result.id}`} className="card history-item">
                <span className="history-item-code">{result.hollandCodeOrdered}</span>
                <div className="history-item-body">
                  <div className="history-item-title">{entry?.title ?? 'Tes SDS Holland'}</div>
                  {entry && <p className="form-hint" style={{ margin: '2px 0' }}>{entry.description_id}</p>}
                  <div className="history-item-date">{formatDate(result.createdAt)}</div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
