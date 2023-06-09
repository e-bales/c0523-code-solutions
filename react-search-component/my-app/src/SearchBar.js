import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ state, changeState }) {
  return (
    <div className="input-wrap">
      <input
        value={state}
        type="text"
        autoComplete="off"
        placeholder="search"
        onChange={(e) => changeState(e.target.value)}
        name="search-bar"
      />
      <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
    </div>
  );
}
