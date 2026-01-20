import React from "react";

export default function Grid({ grid, handleClick }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`w-16 h-16 border border-gray-300 flex items-center justify-center cursor-pointer ${
              cell ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => handleClick(rowIndex, colIndex, true)}
          >
            {cell && <span className="text-white">X</span>}
          </div>
        ))
      )}
    </div>
  );
}