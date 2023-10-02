import './MegaFooter.css';
import whiteLogo from '../images/logo-white.png';

export default function MegaFooter() {
  return (
    <div className="mega-footer">
      <section className="learn-more-wrap">
        <div className="learn-more">
          <div className="col-half">
            <div className="row">
              <h3 className="tiempos">Ready to learn more?</h3>
            </div>
            <div className="row">
              <h4>Schedule a private meeting now</h4>
            </div>
          </div>
          <div className="col-half button-half">
            <button type="button" className="hero-button pointer">
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="address-wrap">
        <div className="address">
          <div className="col-half">
            <div className="row">
              <div className="white-logo-wrap">
                <img
                  className="white-logo"
                  src={whiteLogo}
                  alt="Company Logo"
                />
              </div>
            </div>
            <div className="row address-col">
              <p>2307 Irving Street, Suite 228</p>
              <p>San Francisco CA 94122</p>
              <p>(800) 370-1416</p>
              <p>info@canvasmedical.com</p>
            </div>
          </div>
          <div className="col-info">
            <div className="col-half">
              <div className="row address-col">
                <h2>COMPANY</h2>
                <h3>About Us</h3>
                <h3>Blog</h3>
              </div>
            </div>
            <div className="col-half">
              <div className="row address-col">
                <h2>PRODUCT</h2>
                <h3>Product</h3>
                <h3>Implementation</h3>
                <h3>For Health Plans</h3>
                <h3>Security</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-wrap">
        <div className="footer">
          <div className="row">
            <p>Privacy & Terms</p>
            <p>Contact Us</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
