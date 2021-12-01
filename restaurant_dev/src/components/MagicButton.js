import React from 'react'
import { getAuth } from "firebase/auth";

const MagicButton = () => {
    const auth = getAuth(); //Verbindung zu auth 
    const user = auth.currentUser; //user ist nun der aktuell einheloggte User
    if (user) { // user gibt es nur, wenn jemand eingeloggt war, sonst NULL
        return (
            <h1>Engeloggt alles gut. </h1>
        )
    }
    return (
        <h1>Nicht eingeloggt.</h1>
    )
}
// Mit einer solchen Funktion könnte auch ein Bereich gesichert werden
// User ist eingeloggt Funkton läuft und Bereich wird gerendert
// User ist nicht eingeloggt, Bereich wird nicht gerendert


export default MagicButton
