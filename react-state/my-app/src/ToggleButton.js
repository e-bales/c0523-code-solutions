import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState: ', isClicked);
  function handleClick() {
    console.log('before setter: ', isClicked);
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
    console.log('after setter: ', isClicked);
  }

  if (isClicked) {
    return (
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={handleClick} style={{ backgroundColor: 'white' }}>
        {text}
      </button>
    );
  }
}
