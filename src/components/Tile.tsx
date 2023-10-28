interface TileProps {
  className?: string;
  value: string;
}

export default function Tile({ className, value }: TileProps) {
  return <div className={`tile ${className}`}>{value}</div>;
}
