import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateCurrentUser,
    updatePassword,
    sendEmailVerification,
    applyActionCode,
    sendSignInLinkToEmail,
    getAuth,
    isSignInWithEmailLink,
    signInWithEmailLink,
    actionCodeSettings
}
    from 'firebase/auth';
import { auth } from './firebase_config';
const Register = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    //const [newPassword, setNewPassword] = useState('');

    const [user, setUser] = useState({});

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


    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }

    }

    const logOut = async () => {

        await signOut(auth);

    };


    return (
        <div>


            <h1>Register</h1>
            <input type="text"
                placeholder="E-Mail"
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }} />

            <input type="text"
                placeholder="Password"
                onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }}
            />
            <Button variant="primary" onClick={register}>Register</Button>






            <br></br>
            <Button onClick={logOut}>Sign out</Button>

            <h1>User logged in: </h1>
            {user?.email}
        </div>
    )
}

export default Register