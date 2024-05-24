// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA3SJp5cFlnrQ__UwSMAViPCEuCv4NtrU",
  authDomain: "cine-sphere-2024.firebaseapp.com",
  projectId: "cine-sphere-2024",
  storageBucket: "cine-sphere-2024.appspot.com",
  messagingSenderId: "999565333583",
  appId: "1:999565333583:web:345442152333ff9d2a863a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
