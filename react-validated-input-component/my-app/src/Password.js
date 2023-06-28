import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './Password.css';

export default function Password() {
  const [password, setPassword] = useState('');

  function handleInput(e) {
    const passwordVal = e.target.value;
    setPassword(passwordVal);
  }

  return (
    <div className="password-wrap">
      <label>
        <p>Password</p>
        <div className="password-bar">
          <input
            name="password"
            value={password}
            onChange={(e) => handleInput(e)}
            type="password"></input>
          {password.length > 7 ? (
            <FontAwesomeIcon
              className="icon"
              icon={faCheck}
              style={{ color: '#2abb70' }}
              size="lg"
            />
          ) : (
            <FontAwesomeIcon
              className="icon"
              icon={faXmark}
              style={{ color: '#d33131' }}
              size="lg"
            />
          )}
        </div>
      </label>
      <div className="error-msg">
        {password.length > 7 ? (
          <p></p>
        ) : password.length === 0 ? (
          <p>A password is required</p>
        ) : (
          <p>Your password is too short</p>
        )}
      </div>
    </div>
  );
}
