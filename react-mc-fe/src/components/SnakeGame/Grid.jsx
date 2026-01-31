import { useState } from "react";

export default function GridBlock({ grid, size }) {
  return (
    <div
      className="grid border border-black"
      style={{ gridTemplateColumns: `repeat(${size},1fr)` }}
    >
      {grid.map((row, rI) => {
        return row.map((cell, cI) => {
          return (
            <div
              key={`${rI}-${cI}`}
              className="h-4 w-4 border border-black "
            ></div>
          );
        });
      })}
    </div>
  );
}
