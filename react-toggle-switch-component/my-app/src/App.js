// import logo from './logo.svg';
import './App.css';
import CustomToggle from './CustomToggle';
import { useState } from 'react';

function App() {
  let [toggled, setToggled] = useState(false);

  function handleClick() {
    setToggled(!toggled);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomToggle
          toggleState={toggled}
          onCustomClick={handleClick}></CustomToggle>
      </header>
    </div>
  );
}

export default App;
