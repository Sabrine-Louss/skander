import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./menu.css"

const Menu = () => {
    return (
        <>
            <div id="qwq">
                <Navbar expand="lg" className="bg-body-tertiary qwq">
                <h1 id="titree" style={{color: "white" , marginLeft:"470px"}}>MGMT</h1>
                    <Container id="pop">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='w-100'>
                                <Nav className="me-auto menulist" id="menulist" style={{color: "white" , marginLeft:"490px" , textDecoration:"none"}}>
                                    <Link to="/" style={{textDecoration:"none" , color:"#D1B000"}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/login" style={{textDecoration:"none" , color:"#D1B000"}}>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/register" style={{textDecoration:"none" , color:"#D1B000"}}>Register</Link>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Menu
