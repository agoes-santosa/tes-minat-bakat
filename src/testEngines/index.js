import { CATEGORY_LABELS, CATEGORY_ORDER, sdsHollandQuestions } from '../data/sdsHolland/questions';
import { computeScores, countAnswered, getHollandCode, isComplete } from '../data/sdsHolland/scoring';
import { hollandResultsLookup } from '../data/sdsHolland/resultsLookup';

// Extension point: adding a future test means adding a new folder under
// src/data/, then one new entry here, then one new entry in src/data/tests.js.
// TestRunnerPage and ResultsPage are generic over this shape.
export const testEngines = {
  'sds-holland': {
    questions: sdsHollandQuestions,
    categoryLabels: CATEGORY_LABELS,
    categoryOrder: CATEGORY_ORDER,
    computeScores,
    getCode: getHollandCode,
    countAnswered,
    isComplete,
    resultsLookup: hollandResultsLookup,
  },
};

export function getTestEngine(testId) {
  return testEngines[testId] ?? null;
}
