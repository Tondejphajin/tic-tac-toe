import { useState } from "react";
import Board from "./Board";

export default function TicTocToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Board tiles={tiles}></Board>
    </div>
  );
}
