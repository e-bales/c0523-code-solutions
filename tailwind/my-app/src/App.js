import logo from './logo.svg';
import profilePic from './linkedin_pfp_square.png';
import cutOut from './profile-cutout.png';
import './App.css';

function App() {
  return (
    <div className="App h-screen">
      <header className="header-wrap">
        <div className="header">
          <h3 className="header-link">About</h3>
          <h3 className="header-link border-lr">Work</h3>
          <h3 className="header-link border-r">Github</h3>
          <h3 className="header-link">Resume</h3>
        </div>
      </header>
      <section className="body">
        <div className="body-wrap">
          <div className="row">
            <h1 className="title">Hi, I'm Eli,</h1>
          </div>
          <div className="row">
            <h2 className="sub-title">Welcome to my page!</h2>
          </div>
          <div className="row">
            <h3 className="info">
              I'm a Software Engineer with a background in AI and Web
              Development. Check out some of my work in the links above, or
              download my Resume to learn more about me. Want to get in contact?
              Connect with me on LinkedIn, or send me an email at
              elibales21@gmail.com.
            </h3>
          </div>
          <div className="row">
            <div className="bar"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
