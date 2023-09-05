import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-wrap">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="header py-6 px-4 bg-slate-400 shadow">
          <span className="text-3xl font-sans text-white font-bold">
            Curate
          </span>
        </div>
      </header>
      <div className="body">
        {/* <div className="Title w-64 m-6 pr-2 text-right bg-gradient-to-r from-gray-300 rounded-xl">
          <h1 className="text-black text-xl p-2">Welcome!</h1>
        </div> */}
        <div className="img-wrap m-auto relative -translate-x-24">
          <div className="relative w-80 hover:opacity-60">
            <img
              className="relative z-20"
              src="https://icones.pro/wp-content/uploads/2021/04/icone-d-ordinateur-noir.png"
              alt="computer"
            />
            <div className="circle-bg bg-blue-100 w-72 h-72 rounded-full z-10 absolute inset-0 top-1/2 left-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
