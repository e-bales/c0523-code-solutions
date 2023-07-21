import './Header.css';
import { Link, Outlet } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm">
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <Link to="/about" className="title">
              About
            </Link>
            <Link to="/" className="title">
              Catalog
            </Link>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
