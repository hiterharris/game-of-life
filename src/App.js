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
    </div>
  );
}

export default App;
