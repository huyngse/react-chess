const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
verticalAxis.reverse();
const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const Chessboard = () => {
  const board = [];
  for (let i = 0; i < verticalAxis.length; i++) {
    for (let j = 0; j < horizontalAxis.length; j++) {
      board.push(<span className={`${(i + j)% 2 == 0 && "bg-white"}`}>{verticalAxis[i]}{horizontalAxis[j]}</span>)
    }
  }
  return <div className="bg-[#99BC85] w-[500px] h-[500px] grid grid-cols-8">{board}</div>;
};

export default Chessboard;
