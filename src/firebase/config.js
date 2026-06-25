// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqpdgWevfuKETytxa_MFWKTZVuDfbtb7Y",
  authDomain: "assignment4-e62d6.firebaseapp.com",
  projectId: "assignment4-e62d6",
  storageBucket: "assignment4-e62d6.firebasestorage.app",
  messagingSenderId: "356180888091",
  appId: "1:356180888091:web:29dc44f5af46d623e306be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);