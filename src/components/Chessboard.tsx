import { ReactNode } from "react";

const verticalAxis: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
verticalAxis.reverse();
const horizontalAxis: string[] = ["a", "b", "c", "d", "e", "f", "g", "h"];
const Chessboard = () => {
  const board: ReactNode[] = [];
  for (let i = 0; i < verticalAxis.length; i++) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      const isBlack = (i + j) % 2 !== 0;
      board.push(
        <span
          key={`tile-${i}${j}`}
          className={`${
            isBlack ? "black-tile" : "bg-white"
          } text-gray-200 flex justify-center items-center font-bold text-xl select-none border hover:border-blue-950 hover:text-blue-950 duration-500`}
        >
          {verticalAxis[i]}
          {horizontalAxis[j]}
        </span>
      );
    }
  }
  return (
    <div className="bg-[#99BC85] w-[500px] h-[500px] grid grid-cols-8">
      {board}
    </div>
  );
};

export default Chessboard;
