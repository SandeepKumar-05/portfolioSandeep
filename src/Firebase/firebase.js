// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrFQ7d-XH32mQdFh-thZK9ooy8pPrN520",
  authDomain: "portfoliosandeep-3e67a.firebaseapp.com",
  projectId: "portfoliosandeep-3e67a",
  storageBucket: "portfoliosandeep-3e67a.appspot.com",
  messagingSenderId: "1011378065230",
  appId: "1:1011378065230:web:a74de6d0fc49783512581f",
  measurementId: "G-2HS7HSZ1D6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);