// Renders the six RIASEC types on Holland's classic hexagon layout -
// R, I, A, S, E, C placed clockwise from the top so that adjacent
// types (theoretically more similar, e.g. R-I) sit next to each other
// and opposite types (theoretically least alike, e.g. R-S) sit across
// from each other. One or two overlaid series (interest/capability)
// let the gap between them read as a shape difference rather than a
// separate set of bars.

// SIZE has generous margin beyond MAX_RADIUS + LABEL_OFFSET so the
// longest labels ("Investigatif", "Konvensional") have room to render
// without being clipped by the SVG viewport on either side.
const SIZE = 440;
const CENTER = SIZE / 2;
const MAX_RADIUS = 100;
const LABEL_OFFSET = 30;
const GRID_LEVELS = [0.25, 0.5, 0.75, 1];

function angleForIndex(index) {
  return -90 + index * 60;
}

function pointAt(angleDeg, radius) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

function labelAnchor(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(rad);
  if (Math.abs(cos) < 0.2) return 'middle';
  return cos > 0 ? 'start' : 'end';
}

function polygonForSeries(categories, valuesByCategory) {
  return categories
    .map((category, index) => {
      const angle = angleForIndex(index);
      const percent = Math.max(0, Math.min(100, valuesByCategory[category] ?? 0));
      const { x, y } = pointAt(angle, (percent / 100) * MAX_RADIUS);
      return `${x},${y}`;
    })
    .join(' ');
}

export default function HollandHexagonChart({ categories, categoryLabels, series }) {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="hexagon-chart" role="img" aria-label="Diagram heksagon RIASEC">
      {GRID_LEVELS.map((level) => (
        <polygon
          key={level}
          className="hexagon-grid"
          points={categories.map((_, index) => {
            const { x, y } = pointAt(angleForIndex(index), level * MAX_RADIUS);
            return `${x},${y}`;
          }).join(' ')}
        />
      ))}

      {categories.map((category, index) => {
        const angle = angleForIndex(index);
        const outer = pointAt(angle, MAX_RADIUS);
        return <line key={category} className="hexagon-axis" x1={CENTER} y1={CENTER} x2={outer.x} y2={outer.y} />;
      })}

      {series.map((item) => (
        <polygon
          key={item.key}
          className={`hexagon-series hexagon-series-${item.key}`}
          points={polygonForSeries(categories, item.values)}
        />
      ))}

      {series.map((item) =>
        categories.map((category, index) => {
          const angle = angleForIndex(index);
          const percent = Math.max(0, Math.min(100, item.values[category] ?? 0));
          const { x, y } = pointAt(angle, (percent / 100) * MAX_RADIUS);
          return <circle key={`${item.key}-${category}`} className={`hexagon-point hexagon-point-${item.key}`} cx={x} cy={y} r={3.5} />;
        })
      )}

      {categories.map((category, index) => {
        const angle = angleForIndex(index);
        const { x, y } = pointAt(angle, MAX_RADIUS + LABEL_OFFSET);
        return (
          <text
            key={category}
            className="hexagon-label"
            x={x}
            y={y}
            textAnchor={labelAnchor(angle)}
            dominantBaseline="middle"
          >
            {categoryLabels[category]}
          </text>
        );
      })}
    </svg>
  );
}
