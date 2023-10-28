import { useState } from "react";
import Board from "./Board";

const PLAYER_X = "X";
const PLAYER_Y = "Y";

export default function TicTocToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);

  const handleClick = (tileIndex: number) => {
    console.log(tileIndex);
  };
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board tiles={tiles} onTileClick={handleClick}></Board>
    </div>
  );
}
