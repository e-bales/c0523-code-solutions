import BannerButton from './BannerButton';
import BannerTitle from './BannerTitle';
import './RotatingBanner.css';
import { useState } from 'react';

export default function RotatingBanner({ itemsArray }) {
  const [bannerIndex, setBannerIndex] = useState(0);

  function increment() {
    // used with the 'Next' button
    setBannerIndex((bannerIndex + 1) % itemsArray.length);
  }
  function decrement() {
    // used with the 'Prev' button
    setBannerIndex(customModulo(bannerIndex - 1, itemsArray.length));
  }
  function customIndex(text) {
    // used with the number buttons
    setBannerIndex(text);
  }
  const numberButtons = itemsArray.map((element, index) => (
    <BannerButton
      key={index}
      text={index}
      selected={index === bannerIndex}
      onCustomClick={customIndex}></BannerButton>
  ));

  return (
    <div className="banner">
      <BannerTitle text={itemsArray[bannerIndex]}></BannerTitle>
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
