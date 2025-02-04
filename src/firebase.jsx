import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAEPQ6FHxVZFlczWpO2hz7JgF2e-m29O8",
  authDomain: "instantchat-4e0ed.firebaseapp.com",
  projectId: "instantchat-4e0ed",
  storageBucket: "instantchat-4e0ed.firebasestorage.app",
  messagingSenderId: "796587537801",
  appId: "1:796587537801:web:ca745302df0847d45c5d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);