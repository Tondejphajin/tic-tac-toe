interface TileProps {
  className?: string;
  value: string;
  onTileClick: () => void;
}

export default function Tile({ value, className, onTileClick }: TileProps) {
  return (
    <div className={`tile ${className}`} onClick={onTileClick}>
      {value}
    </div>
  );
}
