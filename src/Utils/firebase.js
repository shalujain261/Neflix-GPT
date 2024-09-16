// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBvZo3v-6QL_8bO91XxlnIxQADtQw9ezo",
  authDomain: "netflixgpt-14d17.firebaseapp.com",
  projectId: "netflixgpt-14d17",
  storageBucket: "netflixgpt-14d17.appspot.com",
  messagingSenderId: "316559997832",
  appId: "1:316559997832:web:ea8076a9ab71764165583d",
  measurementId: "G-R7FKR952QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
