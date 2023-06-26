// import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  function handleIncrement() {
    setCounter(counter + 1);
  }
  function handleDecrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          text="Down"
          onCustomClick={handleDecrement}></CustomButton>
        {counter}
        <CustomButton text="Up" onCustomClick={handleIncrement}></CustomButton>
      </header>
    </div>
  );
}

export default App;
