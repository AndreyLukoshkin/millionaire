import React, { useEffect, useState } from 'react'
import styles from './Game.module.css'
import { useNavigate } from 'react-router-dom'

const Questions = ({ questions, setScore, score }) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const navigate = useNavigate()
  const currentQuestion = questions[questionNumber]

  useEffect(() => {
    if (score === 1000000) navigate('gameover')
  }, [score, navigate])

  const onClickHandler = (answer) => () => {
    if (answer === currentQuestion.rightAnswer) {
      setQuestionNumber(questionNumber + 1)
      setScore(startScore(score))
    } else {
      navigate('gameover')
    }
  }

  const startScore = (score) => {
    if (score === 0) return 500
    if (score === 64000) return 125000
    return score * 2
  }

  const scoresArray = [
    500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000,
    1000000,
  ].reverse()

  return (
    <>
      {currentQuestion && (
        <div className={styles.wrapper}>
          <div className={styles.game}>
            <div className={styles.questionContainer}>
              <h1 className={styles.questionText}>
                {currentQuestion.question}
              </h1>
            </div>

            <div className={styles.answersWrapper}>
              {currentQuestion.answers.map((el, i) => (
                <div key={i + el}>
                  <button
                    onClick={onClickHandler(el)}
                    style={{ border: '3px solid green', margin: '10px 10px' }}
                  >
                    {el}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.score}>
            <div className={styles.scoreWrapper}>
              {scoresArray.map((scor, i) => (
                <div
                  style={{
                    border: score >= scor ? '1px solid red' : 'none',
                  }}
                  key={scor + i}
                >
                  {scor}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Questions
