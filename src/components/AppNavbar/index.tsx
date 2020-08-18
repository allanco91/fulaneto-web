import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from '../../assets/logo.png';

export const AppNavbar: React.FC = () => {
    return (
        <Navbar className='navbar' sticky='top' variant="light" expand='lg'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} height="50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="mr-auto">
                        <Nav.Link id="navbar-link" as={Link} to="/empresa">Empresa</Nav.Link>
                        <Nav.Link id="navbar-link" as={Link} to="/produtos">Produtos</Nav.Link>
                        <Nav.Link id="navbar-link" as={Link} to="/sevicos">Serviços</Nav.Link>
                        <Nav.Link id="navbar-link" as={Link} to="/contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}