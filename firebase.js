// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
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

export const auth = getAuth(app);