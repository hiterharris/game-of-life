import React, {useState} from 'react';
import '../App.css';

const numRows = 20;
const numCols = 20;

function Grid() {
  // Initialize grid with value of zero, "dead"
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows;
  });

  return (
    <div className="Grid" style={{gridTemplateColumns: `repeat(${numCols}, 20px)`}}>
        {grid.map((rows, i) =>
        rows.map((col, k) =>
            <div
            key={`${i}-${k}`}
            style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][k] ? 'pink' : undefined,
                border: '1px solid black'
            }}/>
        ))}
    </div>
  );
}

export default Grid;
