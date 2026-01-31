import { useRef, useState } from "react";
import GridBlock from "./Grid";

let GRID_SIZE = 40;
const SPEED = 1000;

const GRID = Array.from({ length: GRID_SIZE }, () =>
  new Array(GRID_SIZE).fill(""),
);

const bait = () => {
  const x = Math.floor(Math.random() * GRID_SIZE);
  const y = Math.floor(Math.random() * GRID_SIZE);
  return [x, y];
};

const INITIAL_SNAKE = [[`${GRID_SIZE / 2}`, `${GRID_SIZE / 2}`]];

export default function SnakeGame() {
  const directionRef = useRef([1, 0]);
  const baitRef = useRef(bait());
  const [snake, setSnake] = useState(INITIAL_SNAKE);

  return (
    <div className="container">
      <h1 className="heading">Snake Game</h1>
      <GridBlock grid={GRID} size={GRID_SIZE} />
    </div>
  );
}
