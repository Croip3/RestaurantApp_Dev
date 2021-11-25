import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom"
import Login from './components/Login';
import React, { useRef, useState } from "react"
import Register from './components/Register';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import Mail from './components/Mail';
import New_password from './components/New_password';

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
    <div className="App">
      {/***************
*****************
*****************
  */}
    </div >

  );
}
export default App;
