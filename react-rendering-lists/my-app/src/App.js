// import logo from './logo.svg';
import './App.css';
import PokemonList from './PokemonList';
const pokedex1 = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonList pokedex={pokedex1}></PokemonList>
      </header>
    </div>
  );
}

export default App;
