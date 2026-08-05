import { Link, useParams } from 'react-router-dom';
import { occupationFieldMap } from '../data/occupationFieldMap';
import { careerFields, SMA_TRACK_LABELS } from '../data/careerFields';
import { careerOutlook, OUTLOOK_TIERS } from '../data/careerOutlook';

export default function RoleDetailPage() {
  const { resultId, occupation: occupationParam } = useParams();
  const occupation = decodeURIComponent(occupationParam);
  const fieldKey = occupationFieldMap[occupation];
  const field = fieldKey ? careerFields[fieldKey] : null;
  const outlook = careerOutlook[occupation];

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

              {outlook && (
                <div className="outlook-section">
                  <h3 style={{ marginBottom: 8 }}>Prospek Karier ke Depan</h3>
                  <span className={`outlook-badge outlook-${outlook.tier}`}>
                    {OUTLOOK_TIERS[outlook.tier].label}
                  </span>
                  <p style={{ marginTop: 10 }}>{outlook.summary}</p>
                  <p className="outlook-tip">
                    <strong>Cara beradaptasi:</strong> {outlook.tip}
                  </p>
                  <p className="form-hint">
                    Perkiraan arah umum berdasarkan tren otomasi/AI dan pasar kerja Indonesia saat ini, bukan
                    ramalan pasti — kondisi bisa berubah.
                  </p>
                </div>
              )}

              <div className="outlook-section">
                <h3 style={{ marginBottom: 8 }}>Rekomendasi Kampus di Indonesia</h3>

                {field.smaTrack && (
                  <p style={{ marginTop: 0, marginBottom: 14 }}>
                    Jurusan SMA yang relevan:{' '}
                    <span className="outlook-badge outlook-stabil">{SMA_TRACK_LABELS[field.smaTrack]}</span>
                  </p>
                )}

                <ol className="university-list">
                  {field.universities.map((uni) => (
                    <li key={uni.name}>
                      <span className="university-name">{uni.name}</span>
                      <span className="university-faculty">{uni.faculty.join(' / ')}</span>
                    </li>
                  ))}
                </ol>
                <p className="form-hint">
                  Urutan kampus berdasarkan reputasi umum dan akreditasi program studi, bukan peringkat resmi. Nama
                  fakultas bersifat indikatif dan dapat berubah seiring reorganisasi kampus — cek situs resmi
                  universitas untuk memastikan. Penjurusan SMA IPA/IPS/Bahasa juga sudah tidak wajib di banyak
                  sekolah sejak Kurikulum Merdeka, jadi anggap ini sebagai panduan umum, bukan syarat mutlak.
                </p>
              </div>
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
