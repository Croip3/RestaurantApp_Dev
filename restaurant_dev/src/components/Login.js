import React from 'react'
import Button from 'react-bootstrap/Button'

const Login = () => {
    return (
        <div>
           <h1>Register</h1>
           <input type="text" placeholder="E-Mail" />
           <input type="text" placeholder="Password" />
           <Button variant="primary">Register</Button> 
           <h1>Login</h1>
           <input type="text" placeholder="E-Mail" />
           <input type="text" placeholder="Password" />
           <Button variant="primary">Login</Button>
           <h1>User logged in:</h1>
           <Button>Sign out</Button>
        </div>
    )
}

export default Login