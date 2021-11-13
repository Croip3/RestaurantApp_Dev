import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

export const auth = app.auth()
export default app 


/* import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdwFCmyRoWStI0roYhMzjZO2CF38o_TPk",
  authDomain: "auth-development-54560.firebaseapp.com",
  projectId: "auth-development-54560",
  storageBucket: "auth-development-54560.appspot.com",
  messagingSenderId: "938377624082",
  appId: "1:938377624082:web:9b3cd50db3dab4ed7136cb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); */