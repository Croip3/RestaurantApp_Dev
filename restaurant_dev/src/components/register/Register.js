import React from 'react'
import { useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
}
    from 'firebase/auth';
    import { auth } from '../../components/firebase_config';
    import { LoginContainer } from '../login/LoginElements';
const Register = () => {

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    //const [newPassword, setNewPassword] = useState('');

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })




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
        <LoginContainer>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Registrierung</h2>
            <Form >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }} />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Passwort</Form.Label>
                <Form.Control type="password" onChange={(event) => {
                    setRegisterPassword(event.target.value);
                }} />
              </Form.Group>
              
              <Button style={{ backgroundColor: "rgba(242, 38, 19, 1)" }} onClick={register} className="w-100 mt-4" type="submit">
                Registrieren
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2"  style={{ color: "white" }}>
          Sie haben bereits ein Konto? <Link to ="/login">Einloggen</Link>
        </div>


         {/*    <h1>Register</h1>
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
            {user?.email} */}
        </LoginContainer>
    )
}

export default Register