// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//firestore
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBFfX8n5YGxDmFLSVFvly3I9sfOwq-0OO0",
    authDomain: "cook-restaurants-c8784.firebaseapp.com",
    projectId: "cook-restaurants-c8784",
    storageBucket: "cook-restaurants-c8784.appspot.com",
    messagingSenderId: "380354948458",
    appId: "1:380354948458:web:b77ac81c97096b19fd8913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

export const auth = getAuth(app);
export const rtdb = getDatabase(app);
export const db = getFirestore(app);