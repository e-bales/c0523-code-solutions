import './DisplayList.css';

export default function DisplayList({ input, list }) {
  const filteredList = list.filter((sentence) =>
    sentence.toLowerCase().includes(input.toLowerCase())
  );
  const renderList = filteredList.map((element, index) => (
    <li key={index}>{element}</li>
  ));

  return renderList.length > 0 ? (
    <ul>{renderList}</ul>
  ) : (
    <p>No items match the filter.</p>
  );
}
