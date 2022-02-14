// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABVRSKgtne-ZVzaw8D5_lIs6IFDqo7e74",
  authDomain: "chitchat-88608.firebaseapp.com",
  projectId: "chitchat-88608",
  storageBucket: "chitchat-88608.appspot.com",
  messagingSenderId: "20277496838",
  appId: "1:20277496838:web:0feb67529b2818e83a8787",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
