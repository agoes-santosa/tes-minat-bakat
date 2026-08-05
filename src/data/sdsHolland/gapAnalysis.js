// Classifies the gap between interest% and capability% per category.
// A small gap means the two are aligned; a large positive gap means
// interest outpaces self-rated capability (room to build confidence);
// a large negative gap means capability outpaces interest (an
// underused strength) - but only when that capability is actually
// high in absolute terms. Two low scores that happen to differ (e.g.
// interest 10%, capability 30%) are NOT a "hidden talent" - 30% is
// still low confidence, not a strength worth highlighting. Without an
// absolute floor, the relative-only comparison would call that a
// hidden talent, which doesn't hold up.
export const GAP_TIERS = {
  selaras: {
    label: 'Selaras',
    description_id:
      'Minat dan kemampuan Anda di bidang ini sejalan — baik saat keduanya tinggi (kekuatan utama Anda) maupun saat keduanya belum menjadi fokus (bukan prioritas Anda saat ini).',
  },
  talenta: {
    label: 'Talenta Tersembunyi',
    description_id:
      'Kemampuan Anda di bidang ini lebih tinggi dari minat Anda — potensi yang mungkin belum banyak dieksplorasi.',
  },
  berkembang: {
    label: 'Area Berkembang',
    description_id:
      'Minat Anda di bidang ini lebih tinggi dari rasa percaya diri pada kemampuan Anda — wajar, dan bisa diasah lewat latihan dan pengalaman.',
  },
};

const GAP_THRESHOLD = 15;
const MIN_SIGNAL = 50;

export function classifyGap(interestPercent, capabilityPercent) {
  const gap = interestPercent - capabilityPercent;
  if (Math.abs(gap) <= GAP_THRESHOLD) return 'selaras';
  if (gap < 0 && capabilityPercent >= MIN_SIGNAL) return 'talenta';
  if (gap > 0 && interestPercent >= MIN_SIGNAL) return 'berkembang';
  // Large relative gap, but neither side is high enough in absolute
  // terms to call it a real talent or a real growth area.
  return 'selaras';
}
