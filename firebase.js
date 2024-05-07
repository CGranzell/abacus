// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    // apiKey: process.env.API_KEY,
    // authDomain: process.env.AUTH_DOMAIN,
    // databaseURL: process.env.DATABASE_URL,
    // projectId: process.env.PROJECT_ID,
    // storageBucket: process.env.STORAGE_BUCKET,
    // messagingSenderId: process.env.MESSAGING_SENDER_ID,
    // appId: process.env.APP_ID,
    // measurementId: process.env.MEASUREMENT_ID

    apiKey: "AIzaSyCKxxcBNdf_2OEMMquJ5LYnNQAYtkYg6qw",
    authDomain: "abacus-camp.firebaseapp.com",
    databaseURL: "https://abacus-camp-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "abacus-camp",
    storageBucket: "abacus-camp.appspot.com",
    messagingSenderId: "19598447285",
    appId: "1:19598447285:web:d4c9de7956317df4aae4fc",
    measurementId: "G-2S5FFW8RT9"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);



 
