import { ChessPieceType } from "./Chessboard";

type TileProps = {
  color: "black" | "white";
  chessPiece?: ChessPieceType;
  coordination: string;
};

function Tile({ color, coordination, chessPiece }: TileProps) {
  return (
    <span
      className={`${
        color === "black" ? "black-tile" : "bg-white"
      } text-gray-200 flex justify-center items-center font-bold text-xl select-none border hover:border-blue-950 hover:text-blue-950 duration-500 relative`}
    >
      {coordination}
      {chessPiece && (
        <img
          src={`/src/assets/images/${chessPiece.color}_${chessPiece.name}.png`}
          alt="chess piece"
          className="absolute cursor-pointer"
        />
      )}
    </span>
  );
}

export default Tile;
