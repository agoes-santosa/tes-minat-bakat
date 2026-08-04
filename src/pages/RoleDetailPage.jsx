import { Link, useParams } from 'react-router-dom';
import { occupationFieldMap } from '../data/occupationFieldMap';
import { careerFields } from '../data/careerFields';

export default function RoleDetailPage() {
  const { resultId, occupation: occupationParam } = useParams();
  const occupation = decodeURIComponent(occupationParam);
  const fieldKey = occupationFieldMap[occupation];
  const field = fieldKey ? careerFields[fieldKey] : null;

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

          {field ? (
            <>
              <p>
                Untuk menjadi <strong>{occupation}</strong>, Anda dapat menempuh pendidikan di jurusan{' '}
                <strong>{field.name}</strong>.
              </p>
              <p style={{ color: 'var(--color-text-muted)' }}>{field.description_id}</p>

              <h3 style={{ marginBottom: 8 }}>Rekomendasi Kampus di Indonesia</h3>
              <ol className="university-list">
                {field.universities.map((uni) => (
                  <li key={uni}>{uni}</li>
                ))}
              </ol>
              <p className="form-hint">
                Urutan berdasarkan reputasi umum dan akreditasi program studi, bukan peringkat resmi.
              </p>
            </>
          ) : (
            <p style={{ color: 'var(--color-text-muted)' }}>
              Informasi jurusan untuk peran ini belum tersedia.
            </p>
          )}
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
