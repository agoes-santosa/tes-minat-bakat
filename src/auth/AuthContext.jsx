import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db, isFirebaseConfigured } from '../firebase/firebaseConfig';
import { pinToPassword, usernameToEmail } from './authHelpers';

const AuthContext = createContext(null);
const NOT_CONFIGURED_ERROR = { code: 'app/not-configured' };

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured) return undefined;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function register(username, pin, goal, goalOther) {
    if (!isFirebaseConfigured) throw NOT_CONFIGURED_ERROR;
    const email = usernameToEmail(username);
    const password = pinToPassword(pin);
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName: username.trim().toLowerCase() });
    await setDoc(doc(db, 'users', credential.user.uid), {
      username: username.trim().toLowerCase(),
      goal,
      goalOther: goal === 'lainnya' ? goalOther.trim() : null,
      createdAt: serverTimestamp(),
    });
    return credential.user;
  }

  async function login(username, pin) {
    if (!isFirebaseConfigured) throw NOT_CONFIGURED_ERROR;
    const email = usernameToEmail(username);
    const password = pinToPassword(pin);
    const credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user;
  }

  async function logout() {
    if (!isFirebaseConfigured) return;
    await signOut(auth);
  }

  const value = { currentUser, loading, register, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}
