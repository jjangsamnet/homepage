import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBNigEgKZ3SrLxhTKRES9QXmwbMkl_K7bg",
  authDomain: "homepage-971ca.firebaseapp.com",
  projectId: "homepage-971ca",
  storageBucket: "homepage-971ca.firebasestorage.app",
  messagingSenderId: "937689277730",
  appId: "1:937689277730:web:102471b5b1cdd36802b17b",
  measurementId: "G-N3XHFE888F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };