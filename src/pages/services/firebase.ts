import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAZ7UoxvBs-bYmGzhCmaTVbDK63HE6-ClU',
  authDomain: 'auth-yt-280db.firebaseapp.com',
  projectId: 'auth-yt-280db',
  storageBucket: 'auth-yt-280db.appspot.com',
  messagingSenderId: '1000968945412',
  appId: '1:1000968945412:web:8fe82871dcb4263f30da51'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
