import React from 'react';
import NavBar from './NavBar';
import DashboardBody from './DashboardBody';

function App(){
  const appWrapper = {
    maxWidth: '70%',
    marginRight: 'auto',
    marginLeft: 'auto'
  };

  
  return (
    <div style={appWrapper}>
      <NavBar/>
      <DashboardBody/>
    </div>
  );
}

export default App;
