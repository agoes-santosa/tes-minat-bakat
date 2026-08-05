import { CATEGORY_ORDER } from './questions';
import { capabilityQuestions } from './capabilityQuestions';

// Returns average 1-5 self-rating per category (0 if unanswered).
export function computeCapabilityScores(capabilityAnswers) {
  const sums = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  const counts = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  for (const question of capabilityQuestions) {
    const value = capabilityAnswers[question.id];
    if (typeof value === 'number') {
      sums[question.category] += value;
      counts[question.category] += 1;
    }
  }
  const scores = {};
  for (const category of CATEGORY_ORDER) {
    scores[category] = counts[category] > 0 ? sums[category] / counts[category] : 0;
  }
  return scores;
}

export function isCapabilityComplete(capabilityAnswers) {
  return capabilityQuestions.every((question) => typeof capabilityAnswers[question.id] === 'number');
}

export function countCapabilityAnswered(capabilityAnswers) {
  return capabilityQuestions.filter((question) => typeof capabilityAnswers[question.id] === 'number').length;
}

// Converts a 1-5 average rating to a 0-100 percentage for comparison
// against the interest score (0-10 count -> 0-100 percentage).
export function capabilityToPercent(average) {
  return average > 0 ? ((average - 1) / 4) * 100 : 0;
}

export function interestToPercent(count) {
  return (count / 10) * 100;
}
