// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmF9hNyQaL-mmGD7Ib5Yq9ymctfk0QyJI",
  authDomain: "bushtree-9423e.firebaseapp.com",
  projectId: "bushtree-9423e",
  storageBucket: "bushtree-9423e.appspot.com",
  messagingSenderId: "518379849161",
  appId: "1:518379849161:web:9e072f050de96907425418",
  measurementId: "G-D1YBBSZ61W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
// const auth = getAuth(app);

export { app, analytics, db, storage };
