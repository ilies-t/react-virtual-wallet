import React from 'react';
import Account from './components/Account';
import User from './components/User';
import './style/style.scss';

function App() {
  return (
    <div className="App">
      <User name="Username"/>
      <Account currency="$"/>
    </div>
  );
}

export default App;