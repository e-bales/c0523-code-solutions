import CircleButton from './CircleButton';
import ArrowButton from './ArrowButton';
import CarouselImage from './CarouselImage';
import './Carousel.css';
import { useState, useEffect, useCallback } from 'react';

export default function Carousel({ itemsArray }) {
  const [bannerIndex, setBannerIndex] = useState(0);

  /**
   * I created an increment callback function so the 'useEffect' looks cleaner. Otherwise,
   * I would just have the same setBannerIndex call inside useEffect and the dependencies
   * would be bannerIndex and itemsArray.length, instead of incrementCB. I wasn't sure
   * which was more 'industry standard'
   */
  const incrementCB = useCallback(() => {
    setBannerIndex((bannerIndex + 1) % itemsArray.length);
  }, [bannerIndex, itemsArray.length]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      incrementCB();
    }, 3000);
    return () => clearTimeout(timerId);
  }, [incrementCB]);

  function increment() {
    // used with the Right Arrow
    setBannerIndex((bannerIndex + 1) % itemsArray.length);
  }
  function decrement() {
    // used with the Left Arrow
    setBannerIndex(customModulo(bannerIndex - 1, itemsArray.length));
  }
  function customIndex(text) {
    // used with the Circle Buttons
    setBannerIndex(text);
  }

  // generates all the circle buttons, the 'selected' one is a filled circle, while the others are open
  const circleButtons = itemsArray.map((element, index) => (
    <CircleButton
      key={index}
      text={index}
      selected={index === bannerIndex}
      onCustomClick={customIndex}></CircleButton>
  ));

  return (
    <div className="banner">
      <div className="top">
        <ArrowButton isForward={false} onCustomClick={decrement}></ArrowButton>
        <CarouselImage text={itemsArray[bannerIndex]}></CarouselImage>
        <ArrowButton isForward={true} onCustomClick={increment}></ArrowButton>
      </div>
      <div className="buttons">
        <div className="num-buttons">{circleButtons}</div>
      </div>
    </div>
  );
}

function customModulo(n, m) {
  // used because Javascript doesn't handle negative modulo in the way we want.
  return ((n % m) + m) % m;
}
