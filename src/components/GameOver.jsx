import React from 'react'
import { useNavigate } from 'react-router-dom'

const GameOver = ({ score }) => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h1>TOTAL SCORE</h1>
        <h1>{score}</h1>
        <button onClick={() => navigate('/')}>Try again</button>
      </div>
    </>
  )
}

export default GameOver
