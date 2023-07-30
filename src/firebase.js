// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEm3gLug2GqBHG-DV95MiNklIPfyu-Mns",
  authDomain: "clone-131c8.firebaseapp.com",
  projectId: "clone-131c8",
  storageBucket: "clone-131c8.appspot.com",
  messagingSenderId: "289244248040",
  appId: "1:289244248040:web:f66208e021852eb2d9d65d",
  measurementId: "G-Z8RQ9F8EZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);