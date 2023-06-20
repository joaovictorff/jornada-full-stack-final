
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: "AIzaSyARPQ9xclk77AWmFJSgnEdSeJ7ZHd6cROc",
  authDomain: "tiktok-717c8.firebaseapp.com",
  projectId: "tiktok-717c8",
  storageBucket: "tiktok-717c8.appspot.com",
  messagingSenderId: "733937758010",
  appId: "1:733937758010:web:e7448d855623555eb8ea03"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;