import Topic from './Topic';
import './Accordian.css';
import { useState } from 'react';

export default function Accordian({ topics }) {
  const [clickedID, setClickedID] = useState(-1);

  function changeDetails(id) {
    // set our clikedID to -1 if we have clicked on the same header, so none of the details show up
    setClickedID(clickedID === id ? -1 : id);
  }

  return (
    <div className="accordian-wrap">
      {topics.map((element, index) => (
        <Topic
          key={index}
          listId={index}
          clicked={clickedID}
          onCustomClick={changeDetails}
          topicObj={element}></Topic>
      ))}
    </div>
  );
}
