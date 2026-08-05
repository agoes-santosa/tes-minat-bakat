import { CATEGORY_ORDER } from './questions';

// A role's "target profile" treats its 3 code letters as fully required
// (100) and the rest as not required (0). This is a simplification -
// real occupational fit isn't binary - but it gives a transparent,
// explainable comparison against the user's own 0-100 percentages
// rather than an opaque black-box score.
export function targetProfileForCode(codeKey) {
  const letters = codeKey.split('');
  const profile = {};
  for (const category of CATEGORY_ORDER) {
    profile[category] = letters.includes(category) ? 100 : 0;
  }
  return profile;
}

// Per-type match is 100 minus the absolute difference, averaged across
// all 6 types for an overall alignment percentage. Simple percentage
// agreement, not a formal congruence index (e.g. Iachan) - stated
// plainly in the UI so it isn't oversold as clinical measurement.
export function computeAlignment(targetProfile, userProfile) {
  const perType = {};
  let sum = 0;
  for (const category of CATEGORY_ORDER) {
    const match = 100 - Math.abs(targetProfile[category] - (userProfile[category] ?? 0));
    perType[category] = match;
    sum += match;
  }
  return { overall: Math.round(sum / CATEGORY_ORDER.length), perType };
}
