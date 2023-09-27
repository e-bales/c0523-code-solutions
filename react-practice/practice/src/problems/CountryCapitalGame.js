import './CountryCapitalGame.css';
import { useState, useEffect } from 'react';
// problem from https://www.youtube.com/watch?v=XTgB4esy1is&ab_channel=WebDevCody

export default function CountryCapitalGame({ data }) {
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const [incorrect, setIncorrect] = useState([]);
  const [remainingButtons, setRemainingButtons] = useState([
    ...countries,
    ...capitals,
  ]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    remainingButtons.sort(() => Math.random() - 0.5);
  }, []);

  function buttonSelected(entry) {
    if (selected.length === 0) {
      setIncorrect([]);
      setSelected([entry]);
    } else if (selected.length === 1) {
      setSelected([...selected, entry]);
      const holder = [...selected, entry];
      if (data[holder[0]] === holder[1] || data[holder[1]] === holder[0]) {
        let filtered = remainingButtons.filter(
          (item) => item !== holder[0] && item !== holder[1]
        );
        console.log('Filtered is: ', filtered);
        setRemainingButtons(filtered);
        setSelected([]);
      } else {
        setIncorrect(holder);
        setSelected([]);
      }
    }
  }

  console.log(selected);

  if (remainingButtons.length === 0) return <h1>Congratulations!</h1>;
  return (
    <div className="bruh">
      {remainingButtons.map((entry, i) => {
        return (
          <button
            className={`button ${selected.includes(entry) ? 'blue' : ''} ${
              incorrect.includes(entry) ? 'red' : ''
            }`}
            onClick={() => buttonSelected(entry)}
            key={i}>
            {entry}
          </button>
        );
      })}
    </div>
  );
}
