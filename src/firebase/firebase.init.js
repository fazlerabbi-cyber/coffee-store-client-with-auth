// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLbzYQRZodL0COIe2JctSQH1ugPMshWbY",
  authDomain: "coffee-store-7a16f.firebaseapp.com",
  projectId: "coffee-store-7a16f",
  storageBucket: "coffee-store-7a16f.firebasestorage.app",
  messagingSenderId: "144471608405",
  appId: "1:144471608405:web:964f947f5802b69e4f58dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
