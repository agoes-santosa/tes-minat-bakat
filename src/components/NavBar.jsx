import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

export default function NavBar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/');
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          Tes Minat Bakat
        </Link>
        <div className="navbar-actions">
          {currentUser ? (
            <>
              <Link to="/riwayat" className="btn btn-secondary">
                Riwayat
              </Link>
              <span className="navbar-user">{currentUser.displayName}</span>
              <button type="button" className="btn btn-secondary" onClick={handleLogout}>
                Keluar
              </button>
            </>
          ) : (
            <Link to="/masuk" className="btn btn-primary">
              Masuk / Daftar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
