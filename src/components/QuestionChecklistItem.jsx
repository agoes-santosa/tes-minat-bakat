export default function QuestionChecklistItem({ question, value, onChange }) {
  return (
    <div className="question-item">
      <p>{question.text_id}</p>
      <div className="toggle-group" role="group" aria-label={question.text_id}>
        <button
          type="button"
          className={`toggle-btn ${value === true ? 'selected-yes' : ''}`}
          aria-pressed={value === true}
          onClick={() => onChange(question.id, true)}
        >
          Ya
        </button>
        <button
          type="button"
          className={`toggle-btn ${value === false ? 'selected-no' : ''}`}
          aria-pressed={value === false}
          onClick={() => onChange(question.id, false)}
        >
          Tidak
        </button>
      </div>
    </div>
  );
}
