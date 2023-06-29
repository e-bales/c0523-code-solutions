import './Shade.css';

/**
 * viewed: a boolean denoting if the shade component should be shown or not
 * onCustomClick: a callback func to know when the user has clicked on the shade to clsoe the drawer
 */
export default function Shade({ viewed, onCustomClick }) {
  return (
    <div
      className={`shade ${viewed ? 'shade-shown' : 'shade-hidden'}`}
      onClick={onCustomClick}></div>
  );
}
