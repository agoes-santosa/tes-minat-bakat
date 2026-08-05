export default function CapabilityRatingItem({ question, value, onChange, scale }) {
  return (
    <div className="capability-item">
      <p>{question.text_id}</p>
      <div className="rating-scale" role="radiogroup" aria-label={question.text_id}>
        {scale.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`rating-btn ${value === option.value ? 'rating-btn-selected' : ''}`}
            aria-pressed={value === option.value}
            title={option.label}
            onClick={() => onChange(question.id, option.value)}
          >
            {option.value}
          </button>
        ))}
      </div>
      <div className="rating-scale-labels">
        <span>{scale[0].label}</span>
        <span>{scale[scale.length - 1].label}</span>
      </div>
    </div>
  );
}
