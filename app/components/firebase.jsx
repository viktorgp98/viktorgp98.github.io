import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUxKJBUW7JgLFh7pDbNTeUKyVm6k9ogRs",
  authDomain: "portafolioviktorgonzalez.firebaseapp.com",
  projectId: "portafolioviktorgonzalez",
  storageBucket: "portafolioviktorgonzalez.appspot.com",
  messagingSenderId: "493594105548",
  appId: "1:493594105548:web:601954528758e3339b9469",
  measurementId: "G-TJV014ZSJ9",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, getDocs };
