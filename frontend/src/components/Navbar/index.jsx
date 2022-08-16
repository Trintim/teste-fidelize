import React from 'react';
import {
    Container, Nav,
    Navbar as NavbarBootstrap
} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../../index.css';

const Navbar = () => {
    return (
        <NavbarBootstrap bg="dark" variant="dark">
            <Container>
                <NavbarBootstrap.Brand href="#home">Teste FideliZi!</NavbarBootstrap.Brand>
                <Nav className="me-auto">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item navbar-row">
                            <Link className="nav-link" to="/companies">Empresas</Link>
                        </li>
                    </ul>
                </Nav>
            </Container>
        </NavbarBootstrap>
    );
}

export default Navbar;
