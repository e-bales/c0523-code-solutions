import './MegaFooter.css';

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
          <div className="col-half"></div>
          <div className="col-half">
            <div className="col-half"></div>
            <div className="col-half"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
