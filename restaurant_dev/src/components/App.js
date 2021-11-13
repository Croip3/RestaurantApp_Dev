import React from "react"
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {
  return ( 
  <Container 
  className="d-flex align-items-center justify-content-center"  
  style={{ minHeight: "100vh" }}>
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <Router>
     
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Navigate to="login"/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/dashboard"  element={
              <Dashboard />
          } />
            </Routes>
          </AuthProvider>
     
        </Router>
    </div>
  </Container>
    )
}

export default App;
