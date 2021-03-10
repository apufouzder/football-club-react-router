import React from 'react';
import { Navbar, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-style" variant="dark">
            <Navbar.Brand><Link as={Link} to="/home">FootBall Clubs</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link className="link-style" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="link-style" as={Link} to="/about">About</Nav.Link>
                    <Nav.Link className="link-style" as={Link} to="/home">Clubs</Nav.Link>
                    <Nav.Link className="link-style" as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;