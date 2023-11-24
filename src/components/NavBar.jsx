import React, { useState } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';

function NavBar() {

    return (

        <>

            <Container className='nav-container'>
                <Navbar className='justify-content-center'>
                    <Nav>

                        <Nav.Link href='/'><button className='nav-btn'>Home</button></Nav.Link>
                        <Nav.Link href='/places/all-places'><button className='nav-btn'>Load Database</button></Nav.Link>
                        <Nav.Link href='/places/random-place'><button className='nav-btn'>Random Destination</button></Nav.Link>
                        <Nav.Link href='/places/add-place'><button className='nav-btn'>Add to Database</button></Nav.Link>

                    </Nav>
                </Navbar>
            </Container>

        </>
    )
}

export default NavBar;
