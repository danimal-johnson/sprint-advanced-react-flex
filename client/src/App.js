import React from 'react';
import PlayerList from './components/PlayerList';
import { useDarkMode } from './hooks/useDarkMode';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleDark = async e => {
    e.preventDefault();
    await setDarkMode(!darkMode);
  };

  return (
    <div className="App" id="App">
      <header className="App-header">
        <h1>Women's World Cup - 2019</h1>
        <button onClick={toggleDark}>Dark Mode</button>
      </header>
      <PlayerList />  
    </div>
  );
}

export default App;
