import React, { useState } from 'react'
import styles from './StylesModules/QuestionsAndScores.module.css'
import Question from './Question'
import ButtonAnswer from './ButtonAnswer'
import Burger from './Burger'
import Scores from './Scores'
import scoresArray from '../jsonQuestions/scoresArray'

const QuestionsAndScores = ({ questions, setScore, score }) => {
  const [questionNumber, setQuestionNumber] = useState(0)
  const currentQuestion = questions[questionNumber]
  const [upScoresWrapper, setUpScoresWrapper] = useState('scoreWrapper')

  const [isButtonPressed, setIsButtonPressed] = useState(false)
  const [hightlightCorrectIfWrong, setIsCorrectAnswerHighligting] =
    useState(false)

  const goNextQuestion = (questionNumber) => {
    setQuestionNumber(questionNumber)
    setIsButtonPressed(false)
  }

  return (
    <>
      {true && (
        <div className={styles.wrapper}>
          <div className={styles.gameContainer}>
            <Burger setUpScoresWrapper={setUpScoresWrapper} />
            <div className={styles.questionContainer}>
              <Question currentQuestion={currentQuestion} />
            </div>
            <div className={styles.answersWrapper}>
              {currentQuestion?.answers?.map((el, i) => (
                <ButtonAnswer
                  setIsButtonPressed={setIsButtonPressed}
                  isButtonPressed={isButtonPressed}
                  setIsCorrectAnswerHighligting={setIsCorrectAnswerHighligting}
                  hightlightCorrectIfWrong={hightlightCorrectIfWrong}
                  setScore={setScore}
                  score={score}
                  questionNumber={questionNumber}
                  goNextQuestion={goNextQuestion}
                  index={i}
                  key={i + el}
                  rightAnswer={currentQuestion.rightAnswer}
                  answer={el}
                />
              ))}
            </div>
          </div>
          <div className={`${styles[upScoresWrapper]}`}>
            <div className={styles.scoreContainer}>
              {scoresArray.map((scoreFromArray, i) => (
                <Scores
                  key={scoreFromArray + i}
                  scoreTextFromArray={scoreFromArray.displayed}
                  scoreValueFromArray={scoreFromArray.value}
                  score={score}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default QuestionsAndScores
