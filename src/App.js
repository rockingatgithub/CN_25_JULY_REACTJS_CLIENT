import React, { useState } from "react"
import { Link, Route, Routes } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Dashboard from "./component/Dashboard"
import UserForm from "./component/UserForm"

const App = () => {

  const [user, setUser] = useState({})

  return <>

    <Navbar bg="light" expand="lg">
      <Container fluid >
        <Navbar.Brand href="#home"> Interview Portal </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Link to='/signup' > Signup </Link>  
             <Link to='/signin' > Signin </Link>  
             <Link to='/profile' > Profile </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    <Routes>

      <Route path="/signup" element={<UserForm signUp setUser={setUser} />} />
      <Route path="/signin" element={<UserForm signUp={false} setUser={setUser} />} />
      <Route path="/profile" element={<Dashboard user={user} />} />

    </Routes>




  </>

}

export default App