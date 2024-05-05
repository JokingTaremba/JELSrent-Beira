// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jelsrent-beira.firebaseapp.com",
  projectId: "jelsrent-beira",
  storageBucket: "jelsrent-beira.appspot.com",
  messagingSenderId: "169074060363",
  appId: "1:169074060363:web:0cfcc98f3b10994aeab1ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);