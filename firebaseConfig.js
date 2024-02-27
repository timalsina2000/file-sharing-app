// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtyJ0kuvbIN30oLdQw6ji5GFZYihFdYuw",
  authDomain: "file-sharing-app-6021a.firebaseapp.com",
  projectId: "file-sharing-app-6021a",
  storageBucket: "file-sharing-app-6021a.appspot.com",
  messagingSenderId: "262814075635",
  appId: "1:262814075635:web:3e0cdf6a83716c4e7a8586",
  measurementId: "G-LWGRTC63RF"
};

// Initialize Firebase
  export const app = initializeApp(firebaseConfig);
