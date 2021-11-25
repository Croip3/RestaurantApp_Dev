import logo from './logo.svg';
import './App.css';
import Test from './components/Test'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom"
import Login from './components/Login';
//import PrivateRoute from "./PrivateRoute";
import { Container } from "react-bootstrap";
import Unterordner from './components/Unterordner';
import React, { useRef, useState } from "react"
import Register from './components/Register';
import Landing from './components/Landing';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";


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
      window.localStorage.removeItem('emailForSignIn');
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







    <div className="App" >







      <Router>
        <Routes>

          <Route path="components/Unterordner.js" element={<Unterordner />} />
          <Route path="components/Login.js" element={<Login />} />
          <Route path="components/Register.js" element={<Register />} />
          <Route path="components/Landing.js" element={<Landing />} />


        </Routes>
        <div className="w-100 text-center mt-2">
          Registrieren? <Link to="components/Register.js">Registrieren</Link>
        </div>


        <div className="w-100 text-center mt-2">
          Sie haben bereits ein Konto? <Link to="components/Unterordner.js">Einloggen</Link>
        </div>

        <div className="w-100 text-center mt-2">
          Landing Page <Link to="components/Landing.js">Einloggen</Link>
        </div>

      </Router>


    </div>

  );
}

export default App;
