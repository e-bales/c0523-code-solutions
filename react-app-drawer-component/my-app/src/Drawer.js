import './Drawer.css';

/**
 *  menuObj: the object that contains the menu title and the array of link titles
 *  viewed: a boolean denoting whether the drawer should be shown or not
 *  onCustomClick: the callback function to know when to close the drawer
 */

export default function Drawer({ menuObj, viewed, onCustomClick }) {
  return (
    <div className={`drawer ${viewed ? 'shown' : 'hidden'}`}>
      <div className="drawer-top">
        <h1>{menuObj.title}</h1>
      </div>
      <div className="drawer-links">
        {menuObj.links.map((element, index) => (
          <MenuItem
            linkTitle={element}
            key={index}
            onCustomClick={onCustomClick}
          />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ linkTitle, onCustomClick }) {
  return (
    <div className="link">
      <h4 onClick={onCustomClick}>{linkTitle}</h4>
    </div>
  );
}
