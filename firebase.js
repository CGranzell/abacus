// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

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

export const db = getFirestore(app);