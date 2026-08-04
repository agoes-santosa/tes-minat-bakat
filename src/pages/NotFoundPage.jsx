import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="page">
      <div className="container empty-state">
        <h1>404</h1>
        <p>Halaman tidak ditemukan.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 16 }}>
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
