import './CustomToggle.css';

export default function CustomToggle({ toggleState, onCustomClick }) {
  return (
    <div className="wrap">
      <div
        onClick={() => onCustomClick()}
        className={`toggle ${toggleState ? 'green' : 'gray'}`}>
        <div className={`inner-circle ${toggleState ? 'on' : 'off'}`}></div>
      </div>
      <p className="label">{toggleState ? 'On' : 'Off'}</p>
    </div>
  );
}
