// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwMmeJXLisUEDZTAXy5Z4V4lkR-fIrao4",
  authDomain: "pantry-tracker-ca294.firebaseapp.com",
  projectId: "pantry-tracker-ca294",
  storageBucket: "pantry-tracker-ca294.appspot.com",
  messagingSenderId: "663627055096",
  appId: "1:663627055096:web:e867ab4f3991d45a5fe00d",
  measurementId: "G-50ZDR45DQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore};