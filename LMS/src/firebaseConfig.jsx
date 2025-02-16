 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyAdB0dy7ApH1Tjxev8moHu2OZ1gnHVwLjA",
  authDomain: "software-fa6e1.firebaseapp.com",
  projectId: "software-fa6e1",
  storageBucket: "software-fa6e1.firebasestorage.app",
  messagingSenderId: "432867857708",
  appId: "1:432867857708:web:61c7ceb11ba67a93c10889"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export  {auth,db }











