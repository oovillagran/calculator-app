import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <nav className="nav-bar">
        <ul className="nav-container">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
