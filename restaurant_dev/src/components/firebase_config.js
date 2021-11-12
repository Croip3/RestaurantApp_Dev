import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  /* Hier eigene Daten aus 
  Firebase --> Projekteinstellungen --> SDK-Einrichtung und -Konfiguration
  --> const firebaseConfig einfügen */
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);