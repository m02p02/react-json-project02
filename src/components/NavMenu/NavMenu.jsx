import { Container, Navbar, Nav } from 'react-bootstrap';
import "./NavMenu.css";

function NavMenu() {

    return (
        <div className="nav-container-outer">
            <Container className="nav-container-inner">
                <Navbar>
                    <Nav>
                        <Nav.Link href='/'><button className='nav-btn'>h o m e</button></Nav.Link>
                        <Nav.Link href='/places/all-places'><button className='nav-btn'>l o a d</button></Nav.Link>
                        <Nav.Link href='/places/random-place'><button className='nav-btn'>r a n d o m</button></Nav.Link>
                        <Nav.Link href='/places/add-place'><button className='nav-btn'>a d d</button></Nav.Link>
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default NavMenu;
