import { useState } from "react";

function Square({value, onSquareClick}) {
  return (
    <button 
      className="square"
      onClick={onSquareClick}
    > 
      {value} 
    </button>
  )
}

export default function Board() {
  //squares: state variable
  //Array(0).fill(null): create an array with 9 elements and set them to null;
  //Each entry in the array corresponds to the value of a square 
  const [squares, setSquares] = useState(Array(9).fill(null)); 
  function handleClick(){
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
)
}


