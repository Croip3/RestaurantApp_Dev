import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Navigate, Link, condition } from "react-router-dom"
import Login from './components/Login';
import React, { useRef, useState } from "react"
import Register from './components/Register';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import Mail from './components/Mail';
import New_password from './components/New_password';

import RestaurantList from "./components/restaurant_listview/RestaurantList";
import MagicButton from './components/MagicButton';
import NotLoggedIn from './components/NotLoggedIn';

const auth = getAuth();

if (isSignInWithEmailLink(auth, window.location.href)) {



  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {

    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }



  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.

      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser


    })
    .catch((error) => {
      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}


function App() {
  const auth = getAuth(); //Verbindung zu auth 
  const user = auth.currentUser; //user ist nun der aktuell einheloggte User


  return (

    <div className="App">

      <Router>
        <Routes>

          <Route path="components/Login.js" element={<Login />} />
          <Route path="components/Register.js" element={<Register />} />
          <Route path="components/Mail.js" element={<Mail />} />
          <Route path="components/New_password.js" element={<New_password />} />
          < Route path="components/MagicButton.js" element={<MagicButton />} />


          <Route
            path="/restaurants"
            exact
            element={<RestaurantList />}
          ></Route>

        </Routes>
        <div cmssName="w-100 text-center mt-2">
          Möchten Sie sich registrieren?<Link to="components/Register.js">Registrieren</Link>
        </div>


        <div className="w-100 text-center mt-2">
          Sie haben bereits ein Konto?<Link to="components/Login.js">Einloggen</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Registrierung per Mail  <Link to="components/Mail.js">Per Mail</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Neues Passwort  <Link to="components/New_password.js">Neu</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Magic Button  <Link to="components/MagicButton.js"> Magischer Button</Link>
        </div>




      </Router >
    </div >

  );

}
export default App;
