import './CircleButton.css';
import { BsCircleFill, BsCircle } from 'react-icons/bs';

export default function CircleButton({ text, onCustomClick, selected }) {
  if (selected) {
    return (
      <BsCircleFill
        className={'carousel-button'}
        onClick={() => onCustomClick(text)}></BsCircleFill>
    );
  } else {
    return (
      <BsCircle
        className={'carousel-button'}
        onClick={() => onCustomClick(text)}></BsCircle>
    );
  }
}
