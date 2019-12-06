import React from 'react';
import logo from './logo.svg';
import PlayerList from './components/PlayerList';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" /> {/* TODO: CSS to make small */}
      <PlayerList />  
    </div>
  );
}

export default App;
