// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {

apiKey: `${process.env.API_KEY}`,
authDomain: `${process.env.AUTH_DOMAIN}`,
databaseUrl: `${process.env.DATABASE_URL}`,
projectId: `${process.env.PROJECT_ID}`,
storageBucket: `${process.env.STORAGE_BUCKET}`,
messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
appId: `${process.env.APP_ID}`,
measurementId: `${process.env.MEASURMENT_ID}`
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);



 
