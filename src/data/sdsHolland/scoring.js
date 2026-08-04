import { CATEGORY_ORDER, sdsHollandQuestions } from './questions';

export function computeScores(answers) {
  const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  for (const question of sdsHollandQuestions) {
    if (answers[question.id]) scores[question.category] += 1;
  }
  return scores;
}

export function getHollandCode(scores) {
  const sorted = [...CATEGORY_ORDER].sort((a, b) => {
    if (scores[b] !== scores[a]) return scores[b] - scores[a];
    return CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b);
  });
  const top3 = sorted.slice(0, 3);
  return {
    ordered: top3.join(''),
    key: [...top3].sort().join(''),
  };
}

export function isComplete(answers) {
  return sdsHollandQuestions.every((question) => typeof answers[question.id] === 'boolean');
}

export function countAnswered(answers) {
  return sdsHollandQuestions.filter((question) => typeof answers[question.id] === 'boolean').length;
}
