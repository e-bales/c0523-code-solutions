// import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';

const images = [
  '/images/001.png',
  '/images/004.png',
  '/images/007.png',
  '/images/025.png',
  '/images/039.png',
];

function App() {
  return (
    <div className="App">
      <Carousel itemsArray={images}></Carousel>
    </div>
  );
}

export default App;
