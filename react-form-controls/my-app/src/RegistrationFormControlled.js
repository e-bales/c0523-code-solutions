import { useState } from 'react';

export default function RegistrationFormControlled() {
  const [theUsername, setTheUsername] = useState('');
  const [thePassword, setThePassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formObj = { username: theUsername, password: thePassword };
    console.log(formObj);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username{' '}
        <input
          value={theUsername}
          onChange={(e) => setTheUsername(e.target.value)}
          autoComplete="hidden"
          name="username"></input>
      </label>
      <label>
        Password{' '}
        <input
          value={thePassword}
          onChange={(e) => setThePassword(e.target.value)}
          name="password"
          type="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
