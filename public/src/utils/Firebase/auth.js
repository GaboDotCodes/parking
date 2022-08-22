import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  connectAuthEmulator,
  signOut,
} from 'firebase/auth';

import app from './firebase';

const auth = getAuth(app);

if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
}

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const { user } = await signInWithPopup(auth, provider);
  return user.getIdToken();
};

const onAuthChanged = (cB) => onAuthStateChanged(auth, cB);

const logOut = async () => {
  await signOut(auth);
};

export {
  onAuthChanged,
  signInWithGoogle,
  logOut,
};
