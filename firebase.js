// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: process.env.NODE_ENV,
  authDomain: process.env.NODE_ENV,
  projectId: "abacus-f82c6",
  storageBucket: "abacus-f82c6.appspot.com",
  messagingSenderId: "747398820427",
  appId: "1:747398820427:web:30bb2df22f3908288fd3ce",
  measurementId: "G-2G24BFBYP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);