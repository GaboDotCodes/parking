import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAGE9x5a_o-_Ohe9KZhbegiIFvdkffSYqk',
  authDomain: 'neas-parking.firebaseapp.com',
  projectId: 'neas-parking',
  storageBucket: 'neas-parking.appspot.com',
  messagingSenderId: '136281748214',
  appId: '1:136281748214:web:906fe633ae73ac3bb7f2d7',
};

const app = initializeApp(firebaseConfig);

export default app;
