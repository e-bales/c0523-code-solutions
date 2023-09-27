import logo from './logo.svg';
import './App.css';
import CountryCapitalGame from './problems/CountryCapitalGame';

function App() {
  return (
    <div className="App">
      <CountryCapitalGame data={{ Germany: 'Berlin', France: 'Paris' }} />
    </div>
  );
}

export default App;
