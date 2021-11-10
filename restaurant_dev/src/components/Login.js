import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase_config';
const Login = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

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

    }

    const logOut = async () => {

    }

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
            <h1>Login</h1>
            <input type="text"
                placeholder="E-Mail"
                onChange={(event) => {
                    setLoginEmail(event.target.value);
                }} />
            <input type="text"
                placeholder="Password"
                placeholder="Password"
                onChange={(event) => {
                    setLoginPassword(event.target.value);
                }} />
            <Button variant="primary">Login</Button>
            <h1>User logged in:</h1>
            <Button>Sign out</Button>
        </div>
    )
}

export default Login