import React from "react";
import Square from "./Square";
import './gameStyles.css'
const Board = (props) => {
    return (
        <div className="board">
            {props.squares.map((item, index) => {
                return <Square className={item=="X" ? "square is-X":"square is-O"} onClick={() =>props.onClick(index)} value={item} key={index}></Square>
            })}
        </div>
    )
}
export default Board