import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleButton text="Hello!" color="orange" />
        <ToggleButton text="Goodbye!" color="lightgreen" />
        <ToggleButton text="See you tomorrow?!" color="lightblue" />
      </header>
    </div>
  );
}

export default App;
