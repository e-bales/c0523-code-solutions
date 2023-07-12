import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Drawer from './Drawer';
import Shade from './Shade';
import { useState } from 'react';

/**
 * menuObj is an object that has two keys, title and links.
 *  title: a string denoting what title the drawer should have
 *  links: an array holding all the link titles the drawer should have
 */
const menuObj = {
  title: 'Menu',
  links: ['About', 'Get started', 'Sign In', 'Secret Link'],
};

function App() {
  const [enabled, setEnabled] = useState(true);

  function changeEnabled() {
    setEnabled(!enabled);
  }

  return (
    <div className="App">
      <Shade viewed={enabled} onCustomClick={changeEnabled} />
      <Drawer
        menuObj={menuObj}
        viewed={enabled}
        onCustomClick={changeEnabled}
      />
      <MenuBars onCustomClick={changeEnabled} />
    </div>
  );
}

export default App;

function MenuBars({ onCustomClick }) {
  return (
    <FontAwesomeIcon
      className="menu-bars"
      onClick={onCustomClick}
      icon={faBars}
      size="2x"
      style={{ paddingLeft: '1rem', paddingTop: '1rem' }}
    />
  );
}
