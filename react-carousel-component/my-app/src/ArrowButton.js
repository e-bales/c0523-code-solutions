import './ArrowButton.css';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

export default function ArrowButton({ isForward, onCustomClick }) {
  if (isForward) {
    return (
      <BsArrowBarRight
        className="arrow-button"
        onClick={() => onCustomClick()}></BsArrowBarRight>
    );
  } else {
    return (
      <BsArrowBarLeft
        className="arrow-button"
        onClick={() => onCustomClick()}></BsArrowBarLeft>
    );
  }
}
