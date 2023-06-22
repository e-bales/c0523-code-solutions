import './CustomButton.css';

export default function CustomButton({ text, colorClass }) {
  return (
    <button className={colorClass} type="button">
      {text}
    </button>
  );
}
