import { CATEGORY_LABELS, CATEGORY_ORDER, sdsHollandQuestions } from '../data/sdsHolland/questions';
import { computeScores, countAnswered, getHollandCode, isComplete } from '../data/sdsHolland/scoring';
import { hollandResultsLookup } from '../data/sdsHolland/resultsLookup';
import { CAPABILITY_SCALE, capabilityQuestions } from '../data/sdsHolland/capabilityQuestions';
import {
  capabilityToPercent,
  computeCapabilityScores,
  countCapabilityAnswered,
  interestToPercent,
  isCapabilityComplete,
} from '../data/sdsHolland/capabilityScoring';
import { classifyGap, GAP_TIERS } from '../data/sdsHolland/gapAnalysis';
import { allOccupationNames, occupationToCode } from '../data/sdsHolland/occupationCodeIndex';
import { computeAlignment, targetProfileForCode } from '../data/sdsHolland/roleFit';

// Extension point: adding a future test means adding a new folder under
// src/data/, then one new entry here, then one new entry in src/data/tests.js.
// TestRunnerPage and ResultsPage are generic over this shape. The
// capability* fields are optional - a future test without an
// interest/capability split can simply omit them.
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

    capabilityQuestions,
    capabilityScale: CAPABILITY_SCALE,
    computeCapabilityScores,
    isCapabilityComplete,
    countCapabilityAnswered,
    interestToPercent,
    capabilityToPercent,
    classifyGap,
    gapTiers: GAP_TIERS,

    occupationToCode,
    allOccupationNames,
    targetProfileForCode,
    computeAlignment,
  },
};

export function getTestEngine(testId) {
  return testEngines[testId] ?? null;
}
