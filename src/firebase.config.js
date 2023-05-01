// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTxODWwwFTGqCibVdMvmPK4G8Ndthixd8",
  authDomain: "cuisine-castle.firebaseapp.com",
  projectId: "cuisine-castle",
  storageBucket: "cuisine-castle.appspot.com",
  messagingSenderId: "350869912527",
  appId: "1:350869912527:web:3d084e90b09f44eb28f0ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;