// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "garbage-23513.firebaseapp.com",
  projectId: "garbage-23513",
  storageBucket: "garbage-23513.appspot.com",
  messagingSenderId: "753400207125",
  appId: "1:753400207125:web:705b22f27fc4936996bb1c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);