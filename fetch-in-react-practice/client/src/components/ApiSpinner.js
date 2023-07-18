import './ApiSpinner.css';

export default function ApiSpinner({ text }) {
  return (
    <div className="spinner-wrapper">
      <div className="loading-spinner"></div>
      <div className="text">
        <h3>{text}</h3>
      </div>
    </div>
  );
}
