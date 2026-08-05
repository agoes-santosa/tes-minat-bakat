import { Link, useNavigate } from 'react-router-dom';
import { TESTS } from '../data/tests';
import TestCard from '../components/TestCard';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <div className="hero">
          <h1>Tes Minat Bakat</h1>
          <p>Pilih salah satu tes di bawah ini untuk mengenal minat dan potensi karier Anda.</p>
          <Link to="/penjelasan" className="btn btn-primary btn-info" style={{ marginTop: 16 }}>
            <span aria-hidden="true">💡</span> Apa itu Minat & Bakat?
          </Link>
        </div>
        <div className="test-grid">
          {TESTS.map((test) => (
            <TestCard key={test.id} test={test} onClick={() => navigate(`/tes/${test.id}`)} />
          ))}
        </div>
      </div>
    </div>
  );
}
