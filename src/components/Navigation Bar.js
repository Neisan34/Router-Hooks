// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";
const NavigationBar = () => {
    return (
        <>
        <Navbar expand="lg" className="bg-danger">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/about">about</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/contact">Contact Us</Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
       
    );
}

export default NavigationBar;