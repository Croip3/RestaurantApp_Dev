import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {
    onAuthStateChanged,
    updatePassword,
    getAuth,
}
    from 'firebase/auth';


const NewPassword = () => {


    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser] = useState({});

    const auth = getAuth();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })


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

export default NewPassword