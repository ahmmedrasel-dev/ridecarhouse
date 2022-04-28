// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNJx60y_NnCA1RwqBJ0KYAkxlpoHtnNmY",
  authDomain: "ride-carhouse.firebaseapp.com",
  projectId: "ride-carhouse",
  storageBucket: "ride-carhouse.appspot.com",
  messagingSenderId: "907975571042",
  appId: "1:907975571042:web:b03a9d0f086060057d833b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;