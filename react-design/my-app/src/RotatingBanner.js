import BannerButton from './BannerButton';
import BannerTitle from './BannerTitle';
import './RotatingBanner.css';
import { useState } from 'react';

export default function RotatingBanner({ itemsArray }) {
  const [index, setIndex] = useState(0);

  function increment() {
    // used with the 'Next' button
    setIndex((index + 1) % itemsArray.length);
  }
  function decrement() {
    // used with the 'Prev' button
    setIndex(customModulo(index - 1, itemsArray.length));
  }
  function customIndex(text) {
    // used with the number buttons
    setIndex(text);
  }
  const numberButtons = itemsArray.map((element, index) => (
    <BannerButton
      key={index}
      text={index}
      onCustomClick={customIndex}></BannerButton>
  ));

  return (
    <div className="banner">
      <BannerTitle text={itemsArray[index]}></BannerTitle>
      <div className="buttons">
        <BannerButton text="Prev" onCustomClick={decrement}></BannerButton>
        <div className="num-buttons">{numberButtons}</div>
        <BannerButton text="Next" onCustomClick={increment}></BannerButton>
      </div>
    </div>
  );
}

function customModulo(n, m) {
  // used because Javascript doesn't handle negative modulo 'correctly'.
  return ((n % m) + m) % m;
}
