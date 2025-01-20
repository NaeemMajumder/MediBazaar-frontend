// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0xyVeGcO0NZbm92vfGPzrncrQPtt3HP4",
  authDomain: "medi-bazaar.firebaseapp.com",
  projectId: "medi-bazaar",
  storageBucket: "medi-bazaar.firebasestorage.app",
  messagingSenderId: "432573984449",
  appId: "1:432573984449:web:f41d6ddbe34419decd2e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);