// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chat-hmzh.firebaseapp.com",
  projectId: "chat-hmzh",
  storageBucket: "chat-hmzh.firebasestorage.app",
  messagingSenderId: "886185806922",
  appId: "1:886185806922:web:17e1f9487f15f2e4d5aab3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
