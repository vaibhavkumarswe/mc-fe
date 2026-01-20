import React from "react";
import Grid from "./Grid.jsx";
export default function InteractiveShape() {
  const [grid, setGrid] = React.useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );
  const queue = React.useRef([]);
  const timerId = React.useRef([]);

  const handleClick = (rowIndex, colIndex, flag) => {

    if(timerId.current.length > 0 && flag) return;

    if(grid[rowIndex][colIndex] && flag) return;

    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row) => [...row]);
      newGrid[rowIndex][colIndex] = flag;
      if (flag) queue.current.push([rowIndex, colIndex]);
      return newGrid;
    });
  };

  React.useEffect(() => {
    if (queue?.current?.length === 9) {
      queue?.current?.forEach(([r, c], idx) => {
        timerId.current[idx] = setTimeout(() => {
          handleClick(r, c, false);
          if (idx === timerId?.current.length - 1) {
            timerId.current = [];
          }
        }, (idx + 1) * 1000);
      });
      queue.current = [];
    }
  }, [grid]);

  React.useEffect(() => {
    return () => {
      timerId?.current?.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Interactive Shape</h1>
      <Grid grid={grid} handleClick={handleClick} />
    </div>
  );
}
