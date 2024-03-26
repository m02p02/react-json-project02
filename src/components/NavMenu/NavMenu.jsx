import { Container, Navbar, Nav } from 'react-bootstrap';
import "./NavMenu.css";

function NavMenu() {

    return (
        <div className="nav-container-outer">
            <Container className="nav-container-inner">
                <Navbar>
                    <Nav>
                        <Nav.Link href='/'><button className='nav-btn'>Home</button></Nav.Link>
                        <Nav.Link href='/places/all-places'><button className='nav-btn'>Load</button></Nav.Link>
                        <Nav.Link href='/places/random-place'><button className='nav-btn'>Random</button></Nav.Link>
                        <Nav.Link href='/places/add-place'><button className='nav-btn'>Add</button></Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavMenu;
