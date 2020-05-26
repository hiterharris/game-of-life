import React, {useState, useCallback} from 'react';
import '../App.css';

import produce from 'immer';

// Default rows, columns
const numRows = 50;
const numCols = 50;

// Initialize grid with value of zero, "dead"
const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows;
}

function Grid() {
    // Set initial grid state
    const [grid, setGrid] = useState(() => {
      return generateEmptyGrid();
    });

    // Set initial state for app running
    const [running, setRunning] = useState(false);

  return (
    <>
        <button onClick={() => setRunning(!running)}>{running ? 'STOP' : 'START'}</button>
        <div className="Grid" style={{gridTemplateColumns: `repeat(${numCols}, 20px)`}}>
            {grid.map((rows, i) =>
                rows.map((col, k) =>
                    <div
                        key={`${i}-${k}`}
                        onClick={() => {
                            const newGrid = produce(grid, gridCopy => {
                                gridCopy[i][k] = gridCopy[i][k] ? 0 : 1;
                            });
                            setGrid(newGrid)
                        }}
                        style={{
                            width: 20,
                            height: 20,
                            border: '1px solid black',
                            backgroundColor: grid[i][k] ? 'black' : undefined}}
                    />
            ))}
        </div>
    </>
  );
}

export default Grid;
