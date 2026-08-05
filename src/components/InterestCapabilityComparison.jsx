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

  const notableGaps = rows.filter((row) => row.tier !== 'selaras');
  const biggestGap = notableGaps.sort((a, b) => Math.abs(b.gap) - Math.abs(a.gap))[0];
  const biggestGapInfo = biggestGap ? engine.gapTiers[biggestGap.tier] : null;

  return (
    <div>
      <h3 style={{ marginTop: 0, marginBottom: 4 }}>Minat vs Kemampuan</h3>
      <p className="form-hint" style={{ marginTop: 0, marginBottom: 12 }}>
        Rincian per bidang untuk diagram heksagon minat (indigo) dan kemampuan (hijau).
      </p>

      <div style={{ overflowX: 'auto' }}>
        <table className="gap-table">
          <thead>
            <tr>
              <th>Bidang</th>
              <th>Minat</th>
              <th>Kemampuan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.category}>
                <td>{row.label}</td>
                <td>{Math.round(row.interestPercent)}%</td>
                <td>{Math.round(row.capabilityPercent)}%</td>
                <td>
                  <span className={`outlook-badge outlook-comparison-${row.tier}`}>
                    {engine.gapTiers[row.tier].label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="outlook-tip" style={{ marginTop: 16 }}>
        {biggestGap ? (
          <>
            <strong>Kesenjangan paling mencolok:</strong> Pada bidang <strong>{biggestGap.label}</strong>,{' '}
            {biggestGapInfo.description_id.charAt(0).toLowerCase() + biggestGapInfo.description_id.slice(1)}
          </>
        ) : (
          <>
            Minat dan kemampuan Anda selaras di semua bidang — tidak ada kesenjangan besar yang perlu
            diperhatikan khusus saat ini.
          </>
        )}
      </p>
    </div>
  );
}
