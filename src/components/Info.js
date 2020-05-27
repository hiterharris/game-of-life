import React from 'react';
import '../App.css';

function Info() {
  return (
    <div className="Info">
      <div className='about'>
        <h1>Cellular Automata and Conway's "Game of Life"</h1>
        <p>Welcome to John Conway's "Game of Life"! This is a computer science classic from 1970, a program that simulates a cellular automaton (plural automata). It has connections to all kinds of different aspects of computer science and nature.</p>
        <p>A cellular automaton (pl. cellular automata, abbrev. CA) is a discrete model studied in automata theory. Cellular automata are also called cellular spaces, tessellation automata, homogeneous structures, cellular structures, tessellation structures, and iterative arrays.[2] Cellular automata have found application in various areas, including physics, theoretical biology and microstructure modeling.</p>
      </div>

      <div className='rules'>
        <h1>Rules</h1>
        <p>In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.</p>
        <ol>
            <li>If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.</li>
            <li>If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.</li>
        </ol>
      </div>
    </div>
  );
}

export default Info;
