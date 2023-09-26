import './Home.css';
import logoBlue from '../images/logo-blue.svg';
import heroImg from '../images/hero.jpg';
import MegaFooter from '../components/MegaFooter';

export default function Home() {
  return (
    <div className="home-page">
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
      <section className="image-section row">
        <div className="hero-img-wrap row">
          <img alt="hero" className="hero-img" src={heroImg} />
          <div className="img-covering"></div>
          <div className="text-overlay">
            <div className="col-sixty">
              <div className="row">
                <h1 className="hero-title tiempos">
                  The ER Reimagined for Primary Care
                </h1>
              </div>
              <div className="row">
                <p className="hero-info">
                  Can't remember the last time you spoke with a patient without
                  focusing on the EMR? Canvas lets you rediscover joy in the
                  work you do. Capture meaningful data, identify gaps in care,
                  and move seamlessly between your tasks within the platform.
                  You stay present with your patients while your whole care
                  teams stays up-to-speed. Be a better doctor with Canvas,
                  designed for primary care providers with the help of primary
                  care providers.
                </p>
              </div>
              <div className="row">
                <button type="button" className="hero-button pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clinicians-wrap">
        <div className="clinicians">
          <h2 className="tiempos">Clinicians Prefer Canvas</h2>
          <h3>
            Physician-owned primary care across the country have already made
            Canvas the fabric of their care.
          </h3>
          <div className="row locations">
            <div className="col-half">
              <h3>Cascade Family Practice, Portland OR</h3>
            </div>
            <div className="col-half">
              <h3>Ward Medical Clinic, Bonifay FL</h3>
            </div>
          </div>
          <div className="row locations">
            <div className="col-half">
              <h3>Temescal Creek Medicine, Oakland CA</h3>
            </div>
            <div className="col-half">
              <h3>Caribou Medical, Towanda PA</h3>
            </div>
          </div>
          <div className="row locations">
            <div className="col-half">
              <h3>San Juan Healthcare, Friday Harbor WA</h3>
            </div>
            <div className="col-half">
              <h3>Bay Tree Family Care, Red Bay AL</h3>
            </div>
          </div>
        </div>
      </section>
      <MegaFooter />
    </div>
  );
}
