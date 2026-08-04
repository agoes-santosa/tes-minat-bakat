export default function TestCard({ test, onClick }) {
  return (
    <div
      className={`card test-card ${test.active ? '' : 'test-card-disabled'}`}
      onClick={test.active ? onClick : undefined}
      role={test.active ? 'button' : undefined}
      tabIndex={test.active ? 0 : undefined}
      onKeyDown={
        test.active
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') onClick();
            }
          : undefined
      }
    >
      <span className={`badge ${test.active ? 'badge-active' : ''}`}>
        {test.active ? 'Tersedia' : 'Segera hadir'}
      </span>
      <h3>{test.title}</h3>
      <p>{test.description}</p>
    </div>
  );
}
