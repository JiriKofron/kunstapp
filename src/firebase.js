import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyCzQRygoI1N7W_fRYHcm9eBo9EiMMH6Yjw',

  authDomain: 'kunstapp-388c6.firebaseapp.com',

  projectId: 'kunstapp-388c6',

  storageBucket: 'kunstapp-388c6.appspot.com',

  messagingSenderId: '268734639605',

  appId: '1:268734639605:web:e0d72a59c88915f5a604bc',

  measurementId: 'G-W93JGHZ1DD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const fs = firebase;
const db = getFirestore();
const auth = getAuth();
console.log(db);

export { db, fs, auth };
