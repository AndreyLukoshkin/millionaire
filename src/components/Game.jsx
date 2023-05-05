import React, { useEffect, useState } from 'react'
import questions from '../jsonQuestions/questions'
import QuestionsAndScores from './QuestionsAndScores'

const Game = ({ setScore, score, setFinalScore }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(questions)
  }, [])

  return (
    <>
      <QuestionsAndScores
        score={score}
        setScore={setScore}
        questions={data}
        setFinalScore={setFinalScore}
      />
    </>
  )
}

export default Game
