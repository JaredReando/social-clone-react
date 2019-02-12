import React from "react";
import Message from "./Message";

function MessageBox() {
  // const messageBoxStyle = {
  //   display: "grid",
  //   gridTemplateColumns: "1fr",
  //   gridAutoRows: "min-content",
  //   gridGap: "10px"
  // }

  const box = {
  	backgroundColor: "#444",
  	color: "#fff",
  	borderRadius: "5px",
  	padding: "20px",
  	fontSize: "150%"
  }

  const imgStyle = {
    width: "40px"
  }

  return (
    <div style={box}>
      <div>
        <button>POST</button>
        <input type="text" placeholder="What's happening?"></input>
      </div>
      <Message></Message>
      <Message></Message>
    </div>
  )





}

export default MessageBox;
