import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="page">
          <div className="container empty-state">
            <h1>Terjadi kesalahan</h1>
            <p>Aplikasi mengalami masalah saat memuat halaman ini. Silakan muat ulang.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
