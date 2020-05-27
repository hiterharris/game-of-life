import React from 'react';
import Info from './components/Info';
import Grid from './components/Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>Conway's Game of Life</header>
      <Grid />
      <Info />
      <p>Built by <a href='https://github.com/hiterharris/game-of-life' target='_blank'>Hiter Harris</a></p>
    </div>
  );
}

export default App;
