import { useState } from "react";

function Square() {

  //value: store the current value of the Square in state, 
  //setValue: and change it when the Square is clicked.
  const [value, setValue] = useState(null);

  function handleClick(){
    //change Square value on click
    setValue('X');
  }

  return (
    <button 
      className="square" 
      onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  )
}


