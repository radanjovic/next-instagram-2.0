// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl3hLo84qogalaKjsKCtqDg-tbfCICL7c",
  authDomain: "instagram2-d44fa.firebaseapp.com",
  projectId: "instagram2-d44fa",
  storageBucket: "instagram2-d44fa.appspot.com",
  messagingSenderId: "1060311151329",
  appId: "1:1060311151329:web:83cabb7329bc5e2c5d7da0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };