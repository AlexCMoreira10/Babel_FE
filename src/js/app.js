import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* CONFIG FIREBASE */
const firebaseConfig = {
  apiKey: "AIzaSyA1GzaVBqE6BQ8QALyv6oD2uqFlUuk0S54",
  authDomain: "babel-5dcbd.firebaseapp.com",
  projectId: "babel-5dcbd",
  storageBucket: "babel-5dcbd.firebasestorage.app",
  messagingSenderId: "537037438052",
  appId: "1:537037438052:web:7ae0839725eaf0bbb73371"
};

/* INICIALIZA FIREBASE */
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* URL DO BACKEND (CONFERE COM SEU NODE) */
//const URL_BACKEND = "http://localhost:3000/api/users/me";
const URL = "https://babel-backend.onrender.com/api";

