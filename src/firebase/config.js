// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBioOh5IrK0y6ymKgNXOFQctwgrV7qJYvQ",
  authDomain: "journal-app-with-next-js.firebaseapp.com",
  projectId: "journal-app-with-next-js",
  storageBucket: "journal-app-with-next-js.appspot.com",
  messagingSenderId: "1077992730220",
  appId: "1:1077992730220:web:8c1387d2d4319e21533249"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);