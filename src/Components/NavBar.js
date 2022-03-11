import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';

function NavBar() {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div>
      <div className="nav-container">
        <nav className="nav-bar">
          <h3>The Beautiful Game</h3>
          <button onClick={handleToggle}>
            <CgMenuGridO />
          </button>
        </nav>
      </div>
      {navOpen ? (
        <div className="nav-menu">
          <ul>
            <li>All News</li>
            <li>Transfers/Gossip</li>
            <li>Injuries</li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default NavBar;
