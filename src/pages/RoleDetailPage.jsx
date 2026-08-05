import { Link, useParams } from 'react-router-dom';
import RoleDetailContent from '../components/RoleDetailContent';

export default function RoleDetailPage() {
  const { resultId, occupation: occupationParam } = useParams();
  const occupation = decodeURIComponent(occupationParam);

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 640 }}>
        <Link to={`/hasil/${resultId}`} className="btn btn-secondary" style={{ marginBottom: 20 }}>
          ← Kembali ke Hasil
        </Link>

        <div className="card">
          <p className="progress-label" style={{ marginBottom: 0 }}>
            Peran/Karier
          </p>
          <h1 style={{ marginTop: 4, marginBottom: 20 }}>{occupation}</h1>

          <RoleDetailContent occupation={occupation} />
        </div>

        <div className="actions-row">
          <Link to={`/hasil/${resultId}`} className="btn btn-primary">
            Kembali ke Hasil
          </Link>
        </div>
      </div>
    </div>
  );
}
