import React, { Component } from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menubar  from '../Menubar/Menubar';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
        <>
            <Container>
            <Navbar expand="lg" fixed='top'>
                <Navbar.Brand><Link to='/'>akiiko</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav><img src={'/images/font_images/search.svg'} alt='search_icon' /></Nav>
                    <Nav><img src={'/images/font_images/user.svg'} alt='user_icon' /></Nav>
                    <Nav><img src={'/images/font_images/cart.svg'} alt='cart_icon' /></Nav>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container> 
            <Menubar />  
        </>
        )
    }
}

