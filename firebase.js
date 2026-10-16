// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQFRByrC7RTxCZQo4pL--45oa5I6Mo1lI",
  authDomain: "nobleric-999.firebaseapp.com",
  projectId: "nobleric-999",
  storageBucket: "nobleric-999.firebasestorage.app",
  messagingSenderId: "174960260063",
  appId: "1:174960260063:web:840a0d082bf0d86c1bca6a",
  measurementId: "G-MGVSB8H4PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);