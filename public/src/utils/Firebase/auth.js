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

if (window.location.hostname === 'localhost') {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
}

const provider = new GoogleAuthProvider();

const signInWithGoogle = async (cB) => {
  await signInWithPopup(auth, provider);
  cB();
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
