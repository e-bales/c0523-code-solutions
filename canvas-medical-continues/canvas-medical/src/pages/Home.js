import './Home.css';
import logoBlue from '../images/logo-blue.svg';
import heroImg from '../images/hero.jpg';

export default function Home() {
  return (
    <div className="home-page">
      <header className="header-wrap">
        <div className="header row">
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
      <section className="image-section row">
        <div className="hero-img-wrap row">
          <img alt="hero" className="hero-img" src={heroImg} />
          <div className="img-covering"></div>
        </div>
      </section>
      <section className="clinicians col-full">
        <div className="row">
          <h2>Clinicians Prefer Canvas</h2>
        </div>
        <div className="row">
          Physician-owned primary care across the country.
        </div>
      </section>
    </div>
  );
}
