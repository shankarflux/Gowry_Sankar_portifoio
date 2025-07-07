// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeMwfuRNuYxV0hVB_tr-yV1XzuuwXFBR4",
  authDomain: "sankarportfolio.firebaseapp.com",
  projectId: "sankarportfolio",
  storageBucket: "sankarportfolio.firebasestorage.app",
  messagingSenderId: "94489305748",
  appId: "1:94489305748:web:f3b8aa01ac513b4e2c4a81",
  measurementId: "G-QMTSEGKJTZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };
