import "./Game.css";
import Board from "./Board";
import { useState } from "react";

export default function Game() {
  const [isXNext, setIsXNext] = useState(true);
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const newHistory = [...history.splice(0, currentMove + 1), nextSquares];
    setIsXNext(!isXNext);
    setCurrentMove(newHistory.length - 1);
    setHistory(newHistory);
  }

  function travelTo(index) {
    setCurrentMove(index);
    setIsXNext(index % 2 === 0);
  }

  const info = history.map((squares, index) => {
    let description: string;

    if (index === 0) {
      description = "Go to Start";
    } else {
      description = "Go to move #" + index;
    }

    return (
      <button
        key={index}
        onClick={() => {
          travelTo(index);
        }}
      >
        {description}
      </button>
    );
  });

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares}
            isXNext={isXNext}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-history">{info}</div>
      </div>
    </>
  );
}
