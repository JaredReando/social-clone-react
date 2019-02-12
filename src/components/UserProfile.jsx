import React from "react";

function UserProfile() {
  const imageStyle = {
    width: "80px"
  }

  const buttonStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)"
  }

  const centerText = {
    textAlign: "center"
  }

  return (
    <div>
      <div style={centerText}>
        <img style={imageStyle} src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png"></img>
        <p>Jane Doe</p>
      </div>
      <div style={buttonStyle}>
        <button>TWEETS</button>
        <button>FOLLOWING</button>
        <button>FOLLOWERS</button>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  )

}

export default UserProfile;
