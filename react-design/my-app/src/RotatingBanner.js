import BannerButton from './BannerButton';
import BannerTitle from './BannerTitle';
import './RotatingBanner.css';

export default function RotatingBanner({ itemsArray }) {
  function holderFunc() {}
  const numberButtons = itemsArray.map((element, index) => (
    <BannerButton
      key={index}
      text={index}
      onCustomClick={holderFunc}></BannerButton>
  ));

  return (
    <div className="banner">
      <BannerTitle text="Aardvark"></BannerTitle>
      <div className="buttons">
        <BannerButton text="Prev" onCustomClick={holderFunc}></BannerButton>
        <div className="num-buttons">{numberButtons}</div>
        <BannerButton text="Next" onCustomClick={holderFunc}></BannerButton>
      </div>
    </div>
  );
}
