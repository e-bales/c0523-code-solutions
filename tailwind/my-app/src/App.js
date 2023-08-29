import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-wrap">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="header p-6 bg-slate-400">
          <p className="text-sm text-white font-bold">Hello there!</p>
        </div>
      </header>
      <div className="body">
        <div className="Title w-64 m-6 pr-2 text-right bg-gradient-to-r from-gray-300 rounded-xl">
          <h1 className="text-black text-xl p-2">Welcome!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
