import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import RequireAuth from './auth/RequireAuth';
import ErrorBoundary from './components/ErrorBoundary';
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import TestRunnerPage from './pages/TestRunnerPage';
import ResultsPage from './pages/ResultsPage';
import RoleDetailPage from './pages/RoleDetailPage';
import HistoryPage from './pages/HistoryPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/masuk" element={<AuthPage />} />
            <Route
              path="/tes/:testId"
              element={
                <RequireAuth>
                  <TestRunnerPage />
                </RequireAuth>
              }
            />
            <Route
              path="/hasil/:resultId"
              element={
                <RequireAuth>
                  <ResultsPage />
                </RequireAuth>
              }
            />
            <Route
              path="/hasil/:resultId/peran/:occupation"
              element={
                <RequireAuth>
                  <RoleDetailPage />
                </RequireAuth>
              }
            />
            <Route
              path="/riwayat"
              element={
                <RequireAuth>
                  <HistoryPage />
                </RequireAuth>
              }
            />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </ErrorBoundary>
  );
}
