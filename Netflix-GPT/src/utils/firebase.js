// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAofjSHSwcBxCDezgkxO-zUjqZaTAkXKNs",
  authDomain: "netflix-gpt-25325.firebaseapp.com",
  projectId: "netflix-gpt-25325",
  storageBucket: "netflix-gpt-25325.appspot.com",
  messagingSenderId: "69529799421",
  appId: "1:69529799421:web:2d0427c12d70be1d4d0c94",
  measurementId: "G-JC5L7EB7V5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
