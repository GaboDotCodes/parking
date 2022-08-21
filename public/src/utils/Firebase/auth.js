import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

import app from './firebase';

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  return token;
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
