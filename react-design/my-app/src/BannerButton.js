export default function BannerButton({ text, onCustomClick }) {
  return <button onClick={onCustomClick}>{text}</button>;
}
