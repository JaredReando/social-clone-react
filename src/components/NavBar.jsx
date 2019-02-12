import React from "react";

function NavBar() {
  const navStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    fontSize: "0px"
  }

  const navLeft = {
      justifySelf: "flex-start"
  }

  const navRight = {
    justifySelf: "flex-end"
  }

  return (
    <div style={navStyles}>
      <div style={navLeft}>
        <button>HOME</button>
        <button>NOTIFICATIONS</button>
        <button>MESSAGES</button>
      </div>
      <div style={navRight}>
        <input type="text" placeholder="SEARCH..."></input>
        <button>TWEET</button>
      </div>
    </div>
  );

}


export default NavBar;
