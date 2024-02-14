import { ReactNode } from "react";
import Tile from "./Tile";

const verticalAxis: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
verticalAxis.reverse();
const horizontalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];

export type ChessPieceType = {
  name: "pawn" | "king" | "queen" | "knight" | "bishop" | "rook";
  color: "black" | "white";
  yPos?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  xPos?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
};

const pieces: ChessPieceType[] = [
  {
    name: "rook",
    color: "black",
    yPos: 0,
    xPos: 0,
  },
  {
    name: "knight",
    color: "black",
    yPos: 0,
    xPos: 1,
  },
  {
    name: "bishop",
    color: "black",
    yPos: 0,
    xPos: 2,
  },
  {
    name: "queen",
    color: "black",
    yPos: 0,
    xPos: 3,
  },
  {
    name: "king",
    color: "black",
    yPos: 0,
    xPos: 4,
  },
  {
    name: "bishop",
    color: "black",
    yPos: 0,
    xPos: 5,
  },
  {
    name: "knight",
    color: "black",
    yPos: 0,
    xPos: 6,
  },
  {
    name: "rook",
    color: "black",
    yPos: 0,
    xPos: 7,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 0,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 1,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 2,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 3,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 4,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 5,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 6,
  },
  {
    name: "pawn",
    color: "black",
    yPos: 1,
    xPos: 7,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 0,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 1,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 2,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 3,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 4,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 5,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 6,
  },
  {
    name: "pawn",
    color: "white",
    yPos: 6,
    xPos: 7,
  },
  {
    name: "rook",
    color: "white",
    yPos: 7,
    xPos: 0,
  },
  {
    name: "knight",
    color: "white",
    yPos: 7,
    xPos: 1,
  },
  {
    name: "bishop",
    color: "white",
    yPos: 7,
    xPos: 2,
  },
  {
    name: "queen",
    color: "white",
    yPos: 7,
    xPos: 3,
  },
  {
    name: "king",
    color: "white",
    yPos: 7,
    xPos: 4,
  },
  {
    name: "bishop",
    color: "white",
    yPos: 7,
    xPos: 5,
  },
  {
    name: "knight",
    color: "white",
    yPos: 7,
    xPos: 6,
  },
  {
    name: "rook",
    color: "white",
    yPos: 7,
    xPos: 7,
  },
];

let grabbingPiece: HTMLDivElement | null = null;

function handleDragPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  const targetElement = e.target as HTMLDivElement;
  if (targetElement.classList.contains("chess-piece")) {
    const x = e.clientX - 30;
    const y = e.clientY - 35;
    targetElement.style.left = x + "px";
    targetElement.style.top = y + "px";
    grabbingPiece = targetElement;
  }
}
function handleMovePiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  if (grabbingPiece) {
    const x = e.clientX - 30;
    const y = e.clientY - 35;
    grabbingPiece.style.left = x + "px";
    grabbingPiece.style.top = y + "px";
  }
}
function handleDropPiece() {
  grabbingPiece = null;
}
const Chessboard = () => {
  const board: ReactNode[] = [];
  for (let i = 0; i < verticalAxis.length; i++) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const color: "black" | "white" = (i + j) % 2 !== 0 ? "black" : "white";
      // key={`tile-${i}${j}`}
      const piece = pieces.find((p) => p.xPos === j && p.yPos === i);
      board.push(
        <Tile
          color={color}
          coordination={`${horizontalAxis[j]}${verticalAxis[i]}`}
          key={`tile-${i}${j}`}
          chessPiece={piece}
        />
      );
    }
  }
  return (
    <div
      className="bg-[#99BC85] w-[500px] h-[500px] grid grid-cols-8"
      onMouseDown={(e) => handleDragPiece(e)}
      onMouseMove={(e) => handleMovePiece(e)}
      onMouseUp={handleDropPiece}
    >
      {board}
    </div>
  );
};

export default Chessboard;
