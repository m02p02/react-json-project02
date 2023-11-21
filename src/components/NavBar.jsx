import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {

    return (

        <>
            {/*
            <nav className='nav-container'>
                <Link to="/" className='nav-btn'>Home</Link>
                <Link to="/places/all-places" className='nav-btn'>All Places</Link>
                <Link to="/places/random-place" className='nav-btn'>Random Place</Link>
                <Link to='/places/add-place' className='nav-btn'>Add Place</Link>
            </nav>
    */}
            <Container className='nav-container'>
                <Navbar className='justify-content-center'>
                    <Nav>
                        <Nav.Link href='/' className='nav-btn'>Home</Nav.Link>
                        <Nav.Link href='/places/all-places' className='nav-btn'>Load Database</Nav.Link>
                        <Nav.Link href='/places/random-place' className='nav-btn'>Random Destination</Nav.Link>
                        <Nav.Link href='/places/add-place' className='nav-btn'>Add to Database</Nav.Link>
                    </Nav>
                </Navbar>
            </Container>

        </>
    )
}

export default NavBar;
