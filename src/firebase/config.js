// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWEPokrXRjhLWIJfIc9kWAnOhMqwso4M4",
  authDomain: "journalapp-f7400.firebaseapp.com",
  projectId: "journalapp-f7400",
  storageBucket: "journalapp-f7400.appspot.com",
  messagingSenderId: "933332898608",
  appId: "1:933332898608:web:dad58efa59193c1980eef5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );