export default function InterestCapabilityComparison({ result, engine }) {
  const categories = engine.categoryOrder;

  const rows = categories.map((category) => {
    const interestPercent = engine.interestToPercent(result.scores[category] ?? 0);
    const capabilityPercent = engine.capabilityToPercent(result.capabilityScores[category] ?? 0);
    const tier = engine.classifyGap(interestPercent, capabilityPercent);
    return {
      category,
      label: engine.categoryLabels[category],
      interestPercent,
      capabilityPercent,
      gap: interestPercent - capabilityPercent,
      tier,
    };
  });

  const biggestGap = [...rows].sort((a, b) => Math.abs(b.gap) - Math.abs(a.gap))[0];
  const biggestGapInfo = engine.gapTiers[biggestGap.tier];

  return (
    <div className="outlook-section">
      <h3 style={{ marginBottom: 4 }}>Minat vs Kemampuan</h3>
      <p className="form-hint" style={{ marginTop: 0, marginBottom: 16 }}>
        Membandingkan seberapa besar minat Anda pada tiap bidang dengan seberapa yakin Anda pada kemampuan Anda
        sendiri di bidang tersebut.
      </p>

      <div className="comparison-legend">
        <span>
          <i className="legend-dot legend-dot-interest" /> Minat
        </span>
        <span>
          <i className="legend-dot legend-dot-capability" /> Kemampuan
        </span>
      </div>

      <div className="comparison-list">
        {rows.map((row) => (
          <div className="comparison-category" key={row.category}>
            <div className="comparison-category-head">
              <span>{row.label}</span>
              <span className={`outlook-badge outlook-comparison-${row.tier}`}>
                {engine.gapTiers[row.tier].label}
              </span>
            </div>
            <div className="comparison-bar-row">
              <div className="comparison-bar-track">
                <div className="comparison-bar-fill-interest" style={{ width: `${row.interestPercent}%` }} />
              </div>
            </div>
            <div className="comparison-bar-row">
              <div className="comparison-bar-track">
                <div className="comparison-bar-fill-capability" style={{ width: `${row.capabilityPercent}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="outlook-tip">
        <strong>Yang paling menonjol:</strong> Pada bidang <strong>{biggestGap.label}</strong>,{' '}
        {biggestGapInfo.description_id.charAt(0).toLowerCase() + biggestGapInfo.description_id.slice(1)}
      </p>
    </div>
  );
}
