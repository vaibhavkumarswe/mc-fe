import { useState, useEffect } from "react";
import { generateGrid } from "./utils";

export default function MemoryGame() {
  const [cards, setCards] = useState(generateGrid(18));
  const [isLocked, setIsLocked] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsLocked(true);
      setTimeout(() => {
        if (cards[flippedCards[0]].number !== cards[flippedCards[1]].number) {
          setCards((prevState) => {
            return prevState.map((card, idx) => {
              if (idx === flippedCards[0] || idx === flippedCards[1]) {
                return { ...card, isFlipped: false };
              }
              return card;
            });
          });
        }
        setFlippedCards([]);
        setIsLocked(false);
      }, 3000);
    }
  }, [flippedCards]);

  const handleClick = (index) => {
    if (cards[index].isFlipped || isLocked) {
      return;
    }
    setCards((prevState) => {
      return prevState.map((card, idx) => {
        if (idx === index) {
          return { ...card, isFlipped: true };
        }
        return card;
      });
    });
    setFlippedCards((prevState) => [...prevState, index]);
  };

  return (
    <div className="container items-center">
      <h2 className="heading">Memory Game</h2>
      <div className="w-60 h-60 grid grid-cols-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`h-8 w-8 border border-black flex items-center justify-center text-xl cursor-pointer ${
              card.isFlipped ? "bg-blue-400 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleClick(index)}
          >
            {card.isFlipped ? card.number : "?"}
          </div>
        ))}
      </div>
    </div>
  );
}
