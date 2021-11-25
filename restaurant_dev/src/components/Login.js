import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updatePassword,
}
    from 'firebase/auth';
import { auth } from './firebase_config';
const Login = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

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

    const logOut = async () => {

        await signOut(auth);

    };

    return (
        <div className="App">
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

            <br></br>


            <br></br>
            <Button onClick={logOut}>Sign out</Button>

            <h1>User logged in: </h1>
            {user?.email}
        </div>
    )
}

export default Login