import './Topic.css';
/**
 * topicObj: the obj containing the info to display
 * listId: the id of the current topic being generated
 * clicked: the id of the topic the user has clicked the header of
 * onCustomClick: the callback func that should be called when a topic header is clicked
 */
export default function Topic({ topicObj, listId, clicked, onCustomClick }) {
  return (
    <div className="topic-wrap">
      <div onClick={() => onCustomClick(listId)} className="topic border">
        <h2 className="topic-text">{topicObj.topic}</h2>
      </div>
      <div className={`details border ${clicked === listId ? '' : 'hidden'}`}>
        <p className="details-text">{topicObj.details}</p>
      </div>
    </div>
  );
}
