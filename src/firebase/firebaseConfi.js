// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW3wOrqc8n9MXxayZ2nVbu9XsnkFag8XQ",
  authDomain: "m2-sprint4.firebaseapp.com",
  projectId: "m2-sprint4",
  storageBucket: "m2-sprint4.appspot.com",
  messagingSenderId: "475811530461",
  appId: "1:475811530461:web:b56bee95aa86913bdf7d34",
  measurementId: "G-D8SX4LCFMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
//const analytics = getAnalytics(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();

// 871605043967500
// 7e8859ef08929f495f644ed2e93e2dae
// https://m2-sprint4.firebaseapp.com/__/auth/handler