import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom"
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {
    onAuthStateChanged,
    updatePassword,
    getAuth,
}
    from 'firebase/auth';
import { auth } from './firebase_config';

const New_password = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser] = useState({});

    const auth = getAuth();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const refresh = async () => {
        window.location.reload();
    }


    const neuesPasswort = async () => {
        try {

            updatePassword(
                auth.currentUser,
                loginPassword,
            );
            console.log(user);
            window.localStorage.removeItem('emailForSignIn');

        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className="App">

            <h1> Neues Passwort </h1>
            <input type="text"
                placeholder="E-Mail"
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }} />
            <input type="text"
                placeholder="New Password"
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }} />
            <Button variant="primary" onClick={neuesPasswort, refresh}>Neues Passwort</Button>


            <br></br>


            <h1>User logged in: </h1>
            {user?.email}
        </div>


    )
}

export default New_password