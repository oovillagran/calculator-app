import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="nav-bar">
        <Container>
          <Navbar.Brand href="/" className="brand">Math Magicians</Navbar.Brand>
          <Navbar id="responsive-navbar-nav">
            <Nav className="me-auto" />
            <Nav className="nav-container">
              <Link className="nav-item" to="/">Home</Link>
              <Link className="nav-item" to="/calculator">Calculator</Link>
              <Link className="nav-item" to="/quote">Quote</Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
}
