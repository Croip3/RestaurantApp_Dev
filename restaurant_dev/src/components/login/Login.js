import React from 'react'
import { useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updatePassword,
}
    from 'firebase/auth';
import { auth } from '../../components/firebase_config'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const actionCodeSettings = {
        // URL gibt an, wo der Link in der E-Mail hinführt
        // URL muss in der Firebase Console eingetragen werden
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







    const login = async () => {
        try {
          setLoading(true)
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
            navigate("/restaurants",{replace: true});
        } catch (error) {
            console.log(error.message);
        }
        setLoading(false)
    }


    /* const logOut = async () => {

        await signOut(auth);

    };
 */

    return (
        <>
          <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Anmeldung</h2>
            <Form >
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"  onChange={(event) => {
                    setLoginEmail(event.target.value);
                }} />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Passwort</Form.Label>
                <Form.Control type="password" onChange={(event) => {
                    setLoginPassword(event.target.value);
                }} />
              </Form.Group>
              <Button style={{ backgroundColor: "rgba(242, 38, 19, 1)" }} disabled={loading} onClick={login} className="w-100 mt-4" type="submit" >
                Einloggen
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2"  style={{ color: "white" }}>
          Neues Konto erstellen? <Link to ="/register" >Registrieren</Link>
        </div>

          {/*  <h1>Login</h1>
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
            {user?.email} */}
        </>
    )
}

export default Login