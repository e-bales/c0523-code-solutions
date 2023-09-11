import logo from './logo.svg';
import profilePic from './eli-face.png';
import './App.css';

function App() {
  return (
    <div className="App h-screen bg-neutral-800">
      {/* <header className="header-wrap">
        <div className="header py-6 px-4 bg-slate-400 shadow">
          <span className="text-3xl font-sans text-white font-bold">
            Curate
          </span>
        </div>
      </header> */}
      <div className="body font-serif relative pt-10">
        {/* <div className="Title w-64 m-6 pr-2 text-right bg-gradient-to-r from-gray-300 rounded-xl">
          <h1 className="text-black text-xl p-2">Welcome!</h1>
        </div> */}
        <div className="inner-body w-5/6 m-auto pt-4 rounded-lg">
          <div className="text-body pb-6 m-auto flex">
            <div className="col-1 w-1/2 p-2">
              <div className="p-2 flex justify-center align-center">
                <div className="img-wrap w-80 h-80 flex justify-center">
                  <img
                    className="rounded-full border-white border-2"
                    src={profilePic}
                    alt="profile"
                  />
                </div>
              </div>
              <div className="text-title w-3/4 m-auto flex justify-center">
                <div className="text font-bold text-6xl py-6">
                  <h1 className="text-stone-200">Eli Bales</h1>
                </div>
              </div>
            </div>

            <div className="col-1 w-1/2 p-2 flex"></div>
          </div>
        </div>
        {/* <div className="img-wrap m-auto absolute -translate-x-24">
          <div className="relative w-80 hover:opacity-60">
            <img
              className="relative z-20"
              src="https://icones.pro/wp-content/uploads/2021/04/icone-d-ordinateur-noir.png"
              alt="computer"
            />
            <div className="circle-bg bg-blue-100 w-72 h-72 rounded-full z-10 absolute inset-0 top-1/2 left-1/2"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
