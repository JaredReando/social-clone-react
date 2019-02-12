import React from 'react';

function NavBar() {
  const navStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  };

  const navLeft = {
    justifySelf: 'flex-start'
  };

  const navRight = {
    justifySelf: 'flex-end'
  };
  
  const navButton = {
    border: 'none',
    background: 'green'
  };

  return (
    <div style={navStyles}>
      <div style={navLeft}>
        <button style={navButton}>HOME</button>
        <button style={navButton}>NOTIFICATIONS</button>
        <button style={navButton}>MESSAGES</button>
      </div>
      <div style={navRight}>
        <input type="text" placeholder="SEARCH..."></input>
        <button>TWEET</button>
      </div>
    </div>
  );

}


export default NavBar;
