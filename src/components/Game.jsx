import React, { useEffect, useState } from 'react'
import questions from '../jsonQuestions/questions'
import Questions from './Questions'

const Game = ({ setScore, score }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(questions)
  }, [])
  return (
    <>
      <Questions score={score} setScore={setScore} questions={data} />
    </>
  )
}

export default Game
