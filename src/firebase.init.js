// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBR2Zpru-q73Rwcw_D9khN57OwyG82uHTk",
  authDomain: "email-password-auth-36636.firebaseapp.com",
  projectId: "email-password-auth-36636",
  storageBucket: "email-password-auth-36636.firebasestorage.app",
  messagingSenderId: "783526632429",
  appId: "1:783526632429:web:e152159a0711d9405865e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);