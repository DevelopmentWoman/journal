import { initializeApp } from "firebase/app";
import { getAuth }  from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOev1EJg0oxiMzp98DDPpItwieaMp50wo",
  authDomain: "react-login-udemy-8aef4.firebaseapp.com",
  projectId: "react-login-udemy-8aef4",
  storageBucket: "react-login-udemy-8aef4.appspot.com",
  messagingSenderId: "51091442248",
  appId: "1:51091442248:web:5d33bdf646ba690279e67d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore( FirebaseApp );