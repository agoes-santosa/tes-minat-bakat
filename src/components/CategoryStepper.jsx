export default function CategoryStepper({ categories, labels, currentIndex, maxReachedIndex, onStepClick }) {
  return (
    <div className="stepper" role="tablist" aria-label="Bagian tes">
      {categories.map((category, index) => {
        const isActive = index === currentIndex;
        const isDone = index < maxReachedIndex;
        const isReachable = index <= maxReachedIndex;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={!isReachable}
            className={`stepper-item ${isActive ? 'stepper-item-active' : ''} ${isDone ? 'stepper-item-done' : ''}`}
            onClick={() => isReachable && onStepClick(index)}
          >
            <span className="stepper-dot">{isDone ? '✓' : index + 1}</span>
            <span className="stepper-label">{labels[category]}</span>
          </button>
        );
      })}
    </div>
  );
}
