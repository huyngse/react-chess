import { ReactNode, useRef, useState } from "react";
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

const initalPieces: ChessPieceType[] = [
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
// ##################################################################################
const Chessboard = () => {
  const [pieces, setPieces] = useState<ChessPieceType[]>(initalPieces);
  const chessboardRef = useRef<HTMLDivElement>(null);

  let lastX = 0;
  let lastY = 0;
  let grabbingPiece: HTMLDivElement | null = null;

  function handleDragPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const chessboard = chessboardRef.current;
    const targetElement = e.target as HTMLDivElement;
    if (targetElement.classList.contains("chess-piece") && chessboard) {
      const x = e.clientX - 30;
      const y = e.clientY - 35;
      lastX = Math.floor((e.clientX - chessboard.offsetLeft) / 62.5);
      lastY = Math.floor((e.clientY - chessboard.offsetTop) / 62.5);
      targetElement.style.left = x + "px";
      targetElement.style.top = y + "px";
      grabbingPiece = targetElement;
    }
  }

  function handleMovePiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const chessboard = chessboardRef.current;
    if (grabbingPiece && chessboard) {
      const minX = chessboard.offsetLeft;
      const minY = chessboard.offsetTop;
      const maxX = minX + chessboard.clientWidth - 60;
      const maxY = minY + chessboard.clientHeight - 60;
      const x = e.clientX - 30;
      const y = e.clientY - 35;
      if (x < minX) {
        grabbingPiece.style.left = minX + "px";
      } else if (x > maxX) {
        grabbingPiece.style.left = maxX + "px";
      } else {
        grabbingPiece.style.left = x + "px";
      }

      if (y < minY) {
        grabbingPiece.style.top = minY + "px";
      } else if (y > maxY) {
        grabbingPiece.style.top = maxY + "px";
      } else {
        grabbingPiece.style.top = y + "px";
      }
    }
  }

  function handleDropPiece(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const chessboard = chessboardRef.current;
    if (grabbingPiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / 62.5);
      const y = Math.floor((e.clientY - chessboard.offsetTop) / 62.5);
      setPieces((prev) => {
        return prev.map((piece) => {
          if (piece.xPos == lastX && piece.yPos == lastY) {
            return {
              ...piece,
              xPos: x,
              yPos: y,
            } as ChessPieceType;
          }
          return piece;
        });
      });
      grabbingPiece = null;
    }
  }

  const board: ReactNode[] = [];
  for (let i = 0; i < verticalAxis.length; i++) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const color: "black" | "white" = (i + j) % 2 !== 0 ? "black" : "white";
      // key={`tile-${i}${j}`}
      const matchingPieces = pieces.filter((p) => p.xPos === j && p.yPos === i);
      board.push(
        <Tile
          color={color}
          coordination={`${horizontalAxis[j]}${verticalAxis[i]}`}
          key={`tile-${i}${j}`}
          chessPieces={matchingPieces}
        />
      );
    }
  }
  return (
    <div
      className="bg-[#99BC85] w-[500px] h-[500px] grid grid-cols-8"
      ref={chessboardRef}
      onMouseDown={(e) => handleDragPiece(e)}
      onMouseMove={(e) => handleMovePiece(e)}
      onMouseUp={(e) => handleDropPiece(e)}
    >
      {board}
    </div>
  );
};

export default Chessboard;
