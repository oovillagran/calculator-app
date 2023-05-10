import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="/">Math Magicians</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav className="nav-container">
              <Nav.Link>
                <Link className="nav-item" to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-item" to="/calculator">Calculator</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-item" to="/quote">Quote</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
