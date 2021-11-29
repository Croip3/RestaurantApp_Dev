import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {
    onAuthStateChanged,
    updatePassword,
    getAuth,
}
    from 'firebase/auth';


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

    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'http://localhost:3000',
        // This must be true.
        handleCodeInApp: true,
        /*iOS: {
            bundleId: 'com.google.ios'
        },
        android: {
            packageName: 'com.google.android',
            installApp: true,
            minimumVersion: '12'
        },
        dynamicLinkDomain: 'google.page.link'
    */};





    const neuesPasswort = async () => {
        try {
            window.localStorage.removeItem('emailForSignIn');
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
            <Button variant="primary" onClick={neuesPasswort}>Neues Passwort</Button>


            <br></br>


            <h1>User logged in: </h1>
            {user?.email}
        </div>


    )
}

export default New_password