// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb7XnukFTfk9GU-rUNbIs2HNItpSsWz8A",
  authDomain: "abhishek-firebase-2d218.firebaseapp.com",
  projectId: "abhishek-firebase-2d218",
  storageBucket: "abhishek-firebase-2d218.appspot.com",
  messagingSenderId: "1026911520504",
  appId: "1:1026911520504:web:ff50bcfe0274a33e5c9d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;