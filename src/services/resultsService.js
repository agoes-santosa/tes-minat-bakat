import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

// Always scoped by the caller's own uid (taken from AuthContext, never
// from the URL) - see firestore.rules for the matching security boundary.
// `payload` is spread as-is (beyond testId/scores/ordered/key) so optional
// per-test fields like capabilityScores are only written when present -
// Firestore rejects `undefined` field values.
export async function saveResult(uid, { testId, scores, ordered, key, ...optionalFields }) {
  const ref = collection(db, 'users', uid, 'results');
  const docRef = await addDoc(ref, {
    testId,
    scores,
    hollandCodeOrdered: ordered,
    hollandCodeKey: key,
    ...optionalFields,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getResult(uid, resultId) {
  const snap = await getDoc(doc(db, 'users', uid, 'results', resultId));
  if (!snap.exists()) throw new Error('Hasil tidak ditemukan');
  return { id: snap.id, ...snap.data() };
}

export async function listResults(uid) {
  const ref = collection(db, 'users', uid, 'results');
  const q = query(ref, orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
}
