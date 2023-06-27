// import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomButton
          text="First"
          color="lightpurple"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="Second"
          color="lightgreen"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="Third"
          color="lightblue"
          onCustomClick={handleCustomClick}
        />
      </header>
    </div>
  );
}

export default App;
