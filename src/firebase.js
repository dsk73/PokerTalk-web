// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUUPdNeV8YlzXwvXptZ5suBWpfR_i5dC4",
  authDomain: "pokertalk-cf30e.firebaseapp.com",
  projectId: "pokertalk-cf30e",
  storageBucket: "pokertalk-cf30e.firebasestorage.app",
  messagingSenderId: "195374253005",
  appId: "1:195374253005:web:a9608e11082f221109fa84",
  measurementId: "G-SEGSNZJVGR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
