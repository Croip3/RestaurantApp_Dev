import React from 'react'
import { useState } from 'react';
import { Form, Button, Card, Alert } from "react-bootstrap";
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
}
    from 'firebase/auth';
import { auth } from '../../components/firebase_config'
import { Link, useNavigate } from "react-router-dom";
import { LoginContainer } from './LoginElements';

const Login = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })



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
        <LoginContainer  >   
          <Card  >
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
        </LoginContainer>
    );
};

export default Login