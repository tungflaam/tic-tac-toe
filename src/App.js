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

function Board({xIsNext, squares, handlePlay}) {
  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "The winner is:" + winner;
  }else {
    status = "Next player is:" + (xIsNext ? 'X' : 'O');
  }
  function handleClick(i){
    //prevent overwriting the same square
    if(calculateWinner(squares) || squares[i]){
      return;
    }

    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = 'X';
    }else{
      nextSquares[i] = 'O'
    }
    handlePlay(nextSquares);
  }

  return (
    <>
      <div className="status"> {status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() =>handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() =>handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() =>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() =>handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() =>handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() =>handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() =>handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() =>handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() =>handleClick(8)} />
      </div>
    </>
  )
}

export default function Game(){
  //Array(0).fill(null): create an array with 9 elements and set them to null;
  //Each entry in the array corresponds to the value of a square 
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares) {
    //creates a new array that contains all the items in history, followed by nextSquares
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} handlePlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  );
  }
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
    return null;
}