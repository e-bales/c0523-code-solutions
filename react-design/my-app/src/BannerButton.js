import './BannerButton.css';

export default function BannerButton({ text, onCustomClick, selected }) {
  return (
    <button
      className={selected ? 'selected' : ''}
      onClick={() => onCustomClick(text)}>
      {text}
    </button>
  );
}
