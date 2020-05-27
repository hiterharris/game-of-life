import React, {useState, useCallback, useRef} from 'react';
import {numRows, numCols, operations, gridOne, gridTwo, gridThree} from '../data/data';
import produce from 'immer';
import '../App.css';

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

    // Set cell color
    const [color, setColor] = useState('black');

    // Set initial state for app running
    const [running, setRunning] = useState(false);

    // Create ref for running state
    const runningRef = useRef(running);
    runningRef.current = running;

    // Simulate state changes
    const runSimulation = useCallback(() => {
        if (!runningRef.current) {
            return;
        }

        // Update grid state from gridCopy, g = current grid
        setGrid((g) => {
            return produce(g, gridCopy => {
                for (let i = 0; i < numRows; i ++) {
                    for(let k = 0; k < numCols; k++) {

                        // Find number of neighbors for each cell
                        let neighbors = 0;
                        operations.forEach(([x, y]) => {
                            const newI = i + x;
                            const newK = k + y;

                            // Checking bounds of neighbors
                            if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                                neighbors += g[newI][newK]
                            }
                        })

                        // Cell dies if neighbors < 2 or > 3
                        if (neighbors < 2 || neighbors > 3) {
                            gridCopy[i][k] = 0;
                        } 
                        
                        // Cell born if dead and has 3 neighbors
                        else if (g[i][k] === 0 && neighbors === 3) {
                            gridCopy[i][k] = 1;
                        }
                    }
                }
            })
        })

        setTimeout(runSimulation, 1000)
    }, []);

  return (
    <div>
        <div className='buttons'>
            {/* Start simulation */}
            <button
                onClick={() => {
                    setRunning(!running);
                    if (!running) {
                        runningRef.current = true;
                        runSimulation();
                    }
                    console.log(grid);
                }}
            >{running ? 'Stop' : 'Start'}</button>
            
            {/* Random grid */}
            <button onClick={() => {
                const rows = [];
                for (let i = 0; i < numRows; i++) {
                    rows.push(Array.from(Array(numCols), () => Math.random() > 0.5 ? 1 : 0))
                }
                setGrid(rows);
            }}>Random</button>

            {/* Template grid */}
            <button onClick={() => {
                setGrid(gridOne);
            }}>Template 1</button>

            {/* Template grid */}
            <button onClick={() => {
                setGrid(gridTwo);
            }}>Template 2</button>

            {/* Template grid */}
            <button onClick={() => {
                setGrid(gridThree);
            }}>Template 3</button>

            {/* Clear grid */}
            <button onClick={() => {
                setGrid(generateEmptyGrid());
            }}>Clear</button>
        </div>

        <div className="Grid" style={{gridTemplateColumns: `repeat(${numCols}, 25px)`}}>
            {/* Map through each row, column giving each cell it's own value[i][k] */}
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
                            width: 25,
                            height: 25,
                            border: '1px solid black',
                            backgroundColor: grid[i][k] ? color : undefined}}
                    />
            ))}
        </div>

        {/* Change cell color */}
        <div className='color-buttons'>
            <button onClick={() => setColor('black')}>Black</button>
            <button onClick={() => setColor('blue')}>Blue</button>
            <button onClick={() => setColor('red')}>Red</button>
            <button onClick={() => setColor('green')}>Green</button>
            <button onClick={() => setColor('yellow')}>Yellow</button>
            <button onClick={() => setColor('purple')}>Purple</button>
        </div>
    </div>
  );
}

export default Grid;
