export default function CustomButton({ text, onCustomClick }) {
  return (
    <button
      onClick={() => {
        onCustomClick();
      }}
      type="button">
      {text}
    </button>
  );
}
