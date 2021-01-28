import React, { useEffect, useState } from 'react'
import './App.css'
import {gameSubject, initGame, resetGame} from './Game'
import Board from './Board'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'


function App () {
    const [board, setBoard] = useState([])
    const [isGameOver, setIsGameOver] = useState()
    const [result, setResult] = useState()
    const [turn, setTurn] = useState()
    useEffect(() => {
        initGame()
        const subscribe = gameSubject.subscribe((game) => {
            setBoard(game.board)
            setIsGameOver(game.isGameOver)
            setResult(game.result)
            setTurn(game.turn)
        })
        return () => subscribe.unsubscribe()
    }, [])
    return <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
            <div className="interface">
                <div className="container">
                    {isGameOver && (
                        <h2 className="vertical-text"> GAME OVER
                            <button onClick={resetGame}>
                                <span className="vertical-text">NEW GAME</span>
                            </button>
                        </h2>
                    )}
                    <div className="board-container">
                        <Board board={ board } turn={turn}/>
                    </div>
                    {result && <h3 className="vertical-text">{result}</h3>}
                </div>
                <button onClick={resetGame} className="reset">
                    Restart
                </button>
            </div>
        </DndProvider>
    </React.StrictMode>
    
}

export default App;
