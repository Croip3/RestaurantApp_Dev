import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom"
import { GlobalStyle } from './globalStyles';
import Login from './components/login/Login';
import { AppContainer } from './components/login/LoginElements';
import React, { useRef, useState } from "react"
import Register from './components/register/Register';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import Mail from './components/Mail';
import NewPassword from './components/NewPassword';
import RestaurantList from "./components/restaurant_listview/RestaurantList";
import MagicButton from './components/MagicButton';


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

  return (

    <AppContainer 
    className="d-flex align-items-center justify-content-center"  
    style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "max-width: 100%;max-height:40%;" }}>

      <Router>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Navigate to="login"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/new_password" element={<NewPassword />} />
          <Route path="/magic_button" element={<MagicButton />} />
          <Route
            path="/restaurants"
            exact
            element={<RestaurantList />}
          ></Route>
        </Routes>
        {/* <div className="w-100 text-center mt-2">
          Möchten Sie sich registrieren?<Link to="components/Register.js">Registrieren</Link>
        </div>


        <div className="w-100 text-center mt-2">
          Sie haben bereits ein Konto?<Link to="components/Login.js">Einloggen</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Registrierung per Mail  <Link to="components/Mail.js">Per Mail</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Neues Passwort  <Link to="components/NewPassword.js">Neu</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Magic Button  <Link to="components/MagicButton.js"> Magischer Button</Link>
        </div>

 */}


      </Router >
    </div >
    </AppContainer>

  );

}
export default App;
