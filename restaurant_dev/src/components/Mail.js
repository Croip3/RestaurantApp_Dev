import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {
    onAuthStateChanged,
    sendSignInLinkToEmail,
}
    from 'firebase/auth';
import { auth } from './firebase_config';
const Mail = () => {

    const [registerEmail, setRegisterEmail] = useState('');

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

    return (
        <div>
            <h1>E-Mail-Verification</h1>
            <input type="text"
                placeholder="E-Mail"
                onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }} />

            <Button variant="primary" onClick={verify}>Send E-Mail</Button>



            <h1>User logged in: </h1>
            {user?.email}
        </div>
    )
}

export default Mail