export default function ProgressBar({ answered, total }) {
  const percent = total === 0 ? 0 : Math.round((answered / total) * 100);
  return (
    <div>
      <div className="progress-bar-track">
        <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
      </div>
      <p className="progress-label">
        {answered}/{total} pertanyaan terjawab
      </p>
    </div>
  );
}
