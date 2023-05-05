import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import calculateStartingScore from '../utils/calculateStartingScore'
import calculatePreviousScore from '../utils/calculatePreviousScore'
import styles from './StylesModules/QuestionsAndScores.module.css'

const Scores = ({ scoreTextFromArray, score, scoreValueFromArray }) => {
  const navigate = useNavigate()

  const [currentScore, setCurrentScore] = useState(0)
  const [prevScore, setPrevScore] = useState(0)

  const changeClassInScore = () => {
    if (currentScore === scoreValueFromArray) return styles.currentScore
    if (score === scoreValueFromArray) return styles.wonScores
    if (prevScore >= scoreValueFromArray) return styles.prevScores
  }

  useEffect(() => {
    setCurrentScore(calculateStartingScore(score))
    setPrevScore(calculatePreviousScore(score))
  }, [score])

  useEffect(() => {
    if (score === 1000000) {
      navigate('gameover', { replace: true })
    }
  }, [score, navigate])

  return (
    <div className={`${styles.score} ${changeClassInScore()}`}>
      {scoreTextFromArray}
    </div>
  )
}

export default Scores
