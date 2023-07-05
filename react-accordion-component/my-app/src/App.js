import Accordian from './Accordian';

/** topicList should be an array of objects, where objects have two keys, topic and details.
 * [ {
 *   topic: ...,
 *   details: ...
 * },
 * {
 *   topic: ...,
 *   details: ...
 * },
 * ... ]
 */
const topicList = [
  {
    topic: 'Hypertext Markup Language',
    details:
      'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  },
  {
    topic: 'Cascading Style Sheets',
    details:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alognside HTML and JavaScript.',
  },
  {
    topic: 'JavaScript',
    details:
      'JavaScript, oftern abbreviated as JS, is a high-level interpreted programming language that conforms to the ECMAScript specification. Javascript has a curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
];

function App() {
  return (
    <div className="App">
      <Accordian topics={topicList} />
    </div>
  );
}

export default App;
