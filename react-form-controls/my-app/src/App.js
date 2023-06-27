import './App.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <p>Uncontrolled</p>
      <RegistrationFormUncontrolled></RegistrationFormUncontrolled>
      <p>Controlled</p>
      <RegistrationFormControlled></RegistrationFormControlled>
    </div>
  );
}

export default App;
