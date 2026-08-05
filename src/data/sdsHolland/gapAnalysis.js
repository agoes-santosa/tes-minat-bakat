// Classifies the gap between interest% and capability% per category.
// A small gap means the two are aligned; a large positive gap means
// interest outpaces self-rated capability (room to build confidence);
// a large negative gap means capability outpaces interest (an
// underused strength).
export const GAP_TIERS = {
  selaras: {
    label: 'Selaras',
    description_id: 'Minat dan kemampuan Anda di bidang ini seimbang — kombinasi yang solid untuk terus dikembangkan.',
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

export function classifyGap(interestPercent, capabilityPercent) {
  const gap = interestPercent - capabilityPercent;
  if (Math.abs(gap) <= GAP_THRESHOLD) return 'selaras';
  return gap > 0 ? 'berkembang' : 'talenta';
}
