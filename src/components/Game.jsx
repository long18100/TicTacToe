import { useState } from "react"
import ResetButton from "./ResetButton"
import Board from "./board"
import './gameStyles.css'
import checkWin from "../helper"
import AnnounceWinner from "./AnnounceWinner"
import User from "./User"
const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)
    const [count, setCount] = useState(0)
    const winner = checkWin(board)
    const handleClick = (index) => {
        const boardCopy = [...board]

        if (winner || boardCopy[index]) return;
        setCount(count + 1)
        boardCopy[index] = isX ? 'X' : 'O';
        setBoard(boardCopy);
        setIsX(!isX)
    }
    const handleReset = () => {
        setBoard(Array(9).fill(null))
        setIsX(true)
        setCount(0)
    }
    return (
        <div className="game">
            <h1>TIC - TAC - TOE</h1>
            <ResetButton onClick={handleReset}></ResetButton>
            <Board onClick={handleClick} squares={board}></Board>
            <AnnounceWinner onClick ={handleReset} className= {winner && board!=null || count==9 ? "announce-winner d-block" : "d-none"} value={winner ? `Winner is ${winner}`: "No Winner"}></AnnounceWinner>
            <div className="user-container">
                <User avatar="../public/user_1.jpg" className = {isX==true? "user active" : "user"}></User>
                <User avatar="../public/user_2.jpg" className = {isX==false? "user active" : "user"}></User>
            </div>
        </div>
    )
}
export default Game