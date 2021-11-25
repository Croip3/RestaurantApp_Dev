import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
}
    from 'firebase/auth';
import { auth } from './firebase_config';
const Register = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    /**************************************
    ***********************************
    **************************************/

    const logOut = async () => {

        await signOut(auth);

    };


    return (
        <div>
            {/****************************
******************************
*****************************/}
            <br></br>
            <Button onClick={logOut}>Sign out</Button>

            <h1>User logged in: </h1>
            {user?.email}
        </div>
    )
}

export default Register