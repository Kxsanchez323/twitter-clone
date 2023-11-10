// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj6SkkY36ws2jY6nJ-1Xh37KDVzPjQzFE",
  authDomain: "twitter-clone-fe3b3.firebaseapp.com",
  projectId: "twitter-clone-fe3b3",
  storageBucket: "twitter-clone-fe3b3.appspot.com",
  messagingSenderId: "976724523158",
  appId: "1:976724523158:web:74ac04675d3e2ef7cceab7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
