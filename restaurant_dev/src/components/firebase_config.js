import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMrbhIR8lJRv2_rZKmzY-aIG4qZPI8pKY",

  authDomain: "restaurant-authentication.firebaseapp.com",

  projectId: "restaurant-authentication",

  storageBucket: "restaurant-authentication.appspot.com",

  messagingSenderId: "477340841738",

  appId: "1:477340841738:web:453529d511fe7ff961acf3",

  measurementId: "G-RDBT5GSYR9"


};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);