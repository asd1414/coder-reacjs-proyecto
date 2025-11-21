import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";







const firebaseConfig = {
  apiKey: "AIzaSyAVUz7Lxx5mgJCAb1QxL_Ia8jhzXn8zqfU",
  authDomain: "coder-reactjs-efinal88020.firebaseapp.com",
  projectId: "coder-reactjs-efinal88020",
  storageBucket: "coder-reactjs-efinal88020.firebasestorage.app",
  messagingSenderId: "142477334582",
  appId: "1:142477334582:web:dfd468128a933c6abba097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export default db ;