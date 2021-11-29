import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 

  apiKey: "AIzaSyBiFWrlYmMb3nNsG42QNEcDJCeSHUHKjlk",
  authDomain: "fir-e72aa.firebaseapp.com",
  projectId: "fir-e72aa",
  storageBucket: "fir-e72aa.appspot.com",
  messagingSenderId: "1037939465902",
  appId: "1:1037939465902:web:ba6c44c54ac3c2f049d73f"


};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);