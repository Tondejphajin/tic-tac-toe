import Strike from "./Strike";
import Tile from "./Tile";

interface BoardProps {
  tiles: Array<string>;
  onTileClick: (index: number) => void;
}

export default function Board({ tiles, onTileClick }: BoardProps) {
  return (
    <div className="board">
      <Tile
        value={tiles[0]}
        className="right-border bottom-border"
        onTileClick={() => onTileClick(0)}
      ></Tile>
      <Tile
        value={tiles[1]}
        className="right-border bottom-border"
        onTileClick={() => onTileClick(1)}
      ></Tile>
      <Tile
        value={tiles[2]}
        className="bottom-border"
        onTileClick={() => onTileClick(2)}
      ></Tile>
      <Tile
        value={tiles[3]}
        className="right-border bottom-border"
        onTileClick={() => onTileClick(3)}
      ></Tile>
      <Tile
        value={tiles[4]}
        className="right-border bottom-border"
        onTileClick={() => onTileClick(4)}
      ></Tile>
      <Tile
        value={tiles[5]}
        className="bottom-border"
        onTileClick={() => onTileClick(5)}
      ></Tile>
      <Tile
        value={tiles[6]}
        className="right-border "
        onTileClick={() => onTileClick(6)}
      ></Tile>
      <Tile
        value={tiles[7]}
        className="right-border "
        onTileClick={() => onTileClick(7)}
      ></Tile>
      <Tile value={tiles[8]} onTileClick={() => onTileClick(8)}></Tile>
      <Strike></Strike>
    </div>
  );
}
