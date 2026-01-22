import "./styles.css";
import { useState } from "react";
import { getEmptyBoard, checkWinner } from "../../utils/tictactoeUtils";

export default function TicTacToe() {
  const size = 3;
  const [board, setBoard] = useState(getEmptyBoard(size));
  const [turnX, setTurnX] = useState(true);

  const winner = checkWinner(board, size);

  const handleClick = (rInd, cInd) => {
    if (board[rInd][cInd] || winner) return;
    const deepCopy = board.map((row) => [...row]);
    deepCopy[rInd][cInd] = turnX ? "X" : "O";
    setBoard(deepCopy);
    setTurnX(!turnX);
  };


  return (
    <div className="container">
      <h1 className="heading">Tic Tac Toe</h1>
      <div className="flex flex-col">
        <div
          className={`board`}
          style={{ gridTemplateColumns: `repeat(${size},50px)` }}
        >
          {board.map((row, rInd) => {
            return row.map((cell, cInd) => {
              return (
                <div className="cell" onClick={() => handleClick(rInd, cInd)}>
                  {cell}
                </div>
              );
            });
          })}
        </div>
        {!winner && <div className="turn">Turn: {turnX ? "X" : "O"}</div>}
        {winner && <div className="winner">Player {winner} won</div>}
        <button className="border border-black p-2" onClick={() => setBoard(getEmptyBoard(size))}>
            Reset
        </button>
      </div>
    </div>
  );
}
