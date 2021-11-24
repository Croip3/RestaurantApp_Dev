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
const Login = () => {

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
        url: 'http://localhost:3000/',
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

    const verify = async () => {
        try {
            const user = await sendSignInLinkToEmail(
                auth,
                registerEmail,
                actionCodeSettings,
            ).then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', registerEmail);
            })


            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }



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

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }

    }

    const neuesPasswort = async () => {
        try {
            updatePassword(
                auth.currentUser,
                loginPassword,
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
            <h1>E-Mail-Verification</h1>
            <input type="text"
                placeholder="E-Mail"
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }} />

            <Button variant="primary" onClick={verify}>Send E-Mail</Button>

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


            <h1>Login</h1>
            <input type="text"
                placeholder="E-Mail"
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }} />
            <input type="text"
                placeholder="Password"
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }} />
            <Button variant="primary" onClick={login}>Login</Button>

            <h1>Neues Passwort</h1>
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


            <br></br>
            <Button onClick={logOut}>Sign out</Button>

            <h1>User logged in: </h1>
            {user?.email}
        </div>
    )
}

export default Login