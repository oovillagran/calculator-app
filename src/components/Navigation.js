import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navigation.css';

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav-bar">
        <Container>
          <Nav className="me-auto nav-container justify-content-end">
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
        </Container>
      </Navbar>
    </>
  );
}
