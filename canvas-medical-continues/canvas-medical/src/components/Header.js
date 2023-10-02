import './Header.css';
import logoBlue from '../images/logo-blue.svg';

export default function Header() {
  return (
    <header className="header-wrap">
      <div className="header">
        <div className="col-half">
          <div className="logo-wrap-header">
            <img alt="logo" className="logo-blue pointer" src={logoBlue} />
          </div>
        </div>
        <div className="col-half header-links">
          <p className="header-link pointer">Product</p>
          <p className="header-link pointer">Implementation</p>
          <p className="header-link pointer">About Us</p>
          <p className="header-link pointer">Blog</p>
          <button type="button" className="header-button pointer">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
