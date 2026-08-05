// Reverse index built from hollandResultsLookup: which 3-letter code an
// occupation belongs to. Derived at module load rather than hand-typed,
// so it can never drift out of sync with resultsLookup.js.
import { hollandResultsLookup } from './resultsLookup';

export const occupationToCode = (() => {
  const map = {};
  for (const [code, entry] of Object.entries(hollandResultsLookup)) {
    for (const occupation of entry.occupations) {
      map[occupation] = code;
    }
  }
  return map;
})();

export const allOccupationNames = Object.keys(occupationToCode).sort((a, b) => a.localeCompare(b, 'id'));
