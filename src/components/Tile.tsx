import { ChessPieceType } from "./Chessboard";

type TileProps = {
  color: "black" | "white";
  chessPiece?: ChessPieceType;
  coordination: string;
};

function Tile({ color, coordination, chessPiece }: TileProps) {
  return (
    <span
      className={`tile ${
        color === "black" ? "black-tile" : "bg-white"
      } text-gray-200 flex justify-center items-center font-bold text-xl select-none border hover:border-blue-950 hover:text-blue-950 duration-500`}
    >
      {coordination}
      {chessPiece && (
        <div
          className="chess-piece absolute cursor-grab w-[61px] h-[61px] bg-contain bg-no-repeat active:cursor-grabbing"
          style={{
            backgroundImage: `url(/src/assets/images/${chessPiece.color}_${chessPiece.name}.png)`,
          }}
        ></div>
      )}
    </span>
  );
}

export default Tile;
