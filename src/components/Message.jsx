import React from 'react';

function Message() {
  const componentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    gridAutoRows: 'min-content',
    margin: '0'
  };

  const noMargins = {
    marginBlockStart: '0 px',
    marginBlockEnd: '0 px'
  };

  const tinyImage = {
    width: '40px'
  };

  return (
    <div style={componentStyle}>
      <img style={tinyImage} src="https://cdn1.iconfinder.com/data/icons/mix-color-4/502/Untitled-1-512.png"></img>
      <div>
        <h4 style={noMargins}>MESSAGE1</h4>
        <code style={noMargins}>message1</code>
      </div>
    </div>
  );

}


export default Message;
