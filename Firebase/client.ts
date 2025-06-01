
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXFNR9ND1rkdyUzqK2MDn1BHkyftFgS5Y",
  authDomain: "prepwise-88093.firebaseapp.com",
  projectId: "prepwise-88093",
  storageBucket: "prepwise-88093.appspot.com",
  messagingSenderId: "95072152558",
  appId: "1:95072152558:web:0b436d09da815dce9b7cff",
  measurementId: "G-ML748L4K32"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);