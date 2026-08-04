import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { GOAL_OPTIONS, isValidGoal, isValidPin, isValidUsername, mapAuthErrorToMessage } from '../auth/authHelpers';

export default function AuthPage() {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [goal, setGoal] = useState('');
  const [goalOther, setGoalOther] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { register, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? '/';

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');

    if (!isValidUsername(username)) {
      setError('Username harus 3-20 karakter huruf, angka, atau garis bawah (_).');
      return;
    }
    if (!isValidPin(pin)) {
      setError('PIN harus terdiri dari tepat 4 angka.');
      return;
    }
    if (mode === 'register' && !isValidGoal(goal, goalOther)) {
      setError('Silakan pilih tujuan Anda mengikuti tes. Jika memilih "Lainnya", isi keterangannya.');
      return;
    }

    setSubmitting(true);
    try {
      if (mode === 'register') {
        await register(username, pin, goal, goalOther);
      } else {
        await login(username, pin);
      }
      navigate(from, { replace: true });
    } catch (err) {
      setError(mapAuthErrorToMessage(err, mode));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="page">
      <div className="container" style={{ maxWidth: 460 }}>
        <div className="card">
          <div className="tabs">
            <button
              type="button"
              className={`tab-btn ${mode === 'login' ? 'active' : ''}`}
              onClick={() => {
                setMode('login');
                setError('');
              }}
            >
              Masuk
            </button>
            <button
              type="button"
              className={`tab-btn ${mode === 'register' ? 'active' : ''}`}
              onClick={() => {
                setMode('register');
                setError('');
              }}
            >
              Daftar
            </button>
          </div>

          {error && <div className="error-box">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                placeholder="contoh: budi_santoso"
              />
              <p className="form-hint">3-20 karakter: huruf, angka, atau garis bawah.</p>
            </div>

            <div className="form-group">
              <label htmlFor="pin">PIN (4 angka)</label>
              <input
                id="pin"
                type="password"
                inputMode="numeric"
                pattern="\d*"
                maxLength={4}
                value={pin}
                onChange={(event) => setPin(event.target.value.replace(/\D/g, '').slice(0, 4))}
                autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                placeholder="••••"
              />
            </div>

            {mode === 'register' && (
              <div className="form-group">
                <label>Tujuan mengikuti tes</label>
                <div className="radio-group">
                  {GOAL_OPTIONS.map((option) => (
                    <label key={option.value} className="radio-option">
                      <input
                        type="radio"
                        name="goal"
                        value={option.value}
                        checked={goal === option.value}
                        onChange={(event) => setGoal(event.target.value)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
                {goal === 'lainnya' && (
                  <input
                    type="text"
                    style={{ marginTop: 10 }}
                    value={goalOther}
                    onChange={(event) => setGoalOther(event.target.value)}
                    placeholder="Sebutkan tujuan Anda"
                  />
                )}
              </div>
            )}

            <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
              {submitting ? 'Memproses...' : mode === 'register' ? 'Daftar' : 'Masuk'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
