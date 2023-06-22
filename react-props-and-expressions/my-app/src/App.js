// import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomButton text={'I'} colorClass={'red'} />
        <CustomButton text={'know'} colorClass={'green'} />
        <CustomButton text={'React!'} colorClass={'blue'} />
      </header>
    </div>
  );
}

export default App;
