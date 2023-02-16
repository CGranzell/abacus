// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2D0X_Fd79rLk6KErLeHKMk4TnQpjslDo",
  authDomain: "abacus-f82c6.firebaseapp.com",
  projectId: "abacus-f82c6",
  storageBucket: "abacus-f82c6.appspot.com",
  messagingSenderId: "747398820427",
  appId: "1:747398820427:web:30bb2df22f3908288fd3ce",
  measurementId: "G-2G24BFBYP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);