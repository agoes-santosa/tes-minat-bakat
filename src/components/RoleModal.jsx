import { useEffect } from 'react';
import RoleDetailContent from './RoleDetailContent';

export default function RoleModal({ occupation, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close" onClick={onClose} aria-label="Tutup">
          ×
        </button>

        <p className="progress-label" style={{ marginBottom: 0 }}>
          Peran/Karier
        </p>
        <h2 style={{ marginTop: 4, marginBottom: 20 }}>{occupation}</h2>

        <RoleDetailContent occupation={occupation} />
      </div>
    </div>
  );
}
