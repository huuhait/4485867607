import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Board from './components/Board'
import Square from './components/Square'

function App() {
  const [squares, setSquares] = useState(Array(9).fill({ status: '' }))
  const [turn, setTurn] = useState('X')
  const [turns, setTurns] = useState<number[]>([])

  const applySquare = (index: number) => {
    if (squares[index].status) {
      return
    }

    const newSquares = [...squares]
    newSquares[index] = { status: turn }
    setSquares(newSquares)
    setTurn(turn === 'X' ? 'O' : 'X')
    setTurns([...turns, index])
  }

  const back = () => {
    const latest_turn = turns.pop()
    if (latest_turn !== undefined) {
      const newSquares = [...squares]
      newSquares[latest_turn] = { status: '' }
      setSquares(newSquares)
      setTurn(turn === 'X' ? 'O' : 'X')
    }
  }

  const isWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a].status && squares[a].status === squares[b].status && squares[a].status === squares[c].status) {
        return lines[i]
      }
    }
    return null
  }

  return (
    <div>
      <button onClick={() => back()}>
        Back
      </button>
      <Board>
        {squares.map((square, index) => (<Square key={index} isWinner={isWinner()?.includes(index)} status={square.status} onClick={() => applySquare(index)} />))}
      </Board>
    </div>
  )
}

export default App
