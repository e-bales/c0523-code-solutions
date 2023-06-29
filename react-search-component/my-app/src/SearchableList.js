import SearchBar from './SearchBar';
import DisplayList from './DisplayList';
import './SearchableList.css';
import { useState } from 'react';

export default function SearchableList({ list }) {
  const [input, setInput] = useState('');

  return (
    <div className="search-wrap">
      <div className="search-list">
        <SearchBar state={input} changeState={setInput} />
        <DisplayList input={input} list={list} />
      </div>
    </div>
  );
}
