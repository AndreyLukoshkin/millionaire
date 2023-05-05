import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './StylesModules/QuestionsAndScores.module.css'
import calculateStartingScore from '../utils/calculateStartingScore'
import animateAnswerWithSetTimeout from '../utils/animateAnswerWithSetTimeout'

const ButtonAnswer = (props) => {
  const {
    rightAnswer,
    answer,
    index,
    goNextQuestion,
    questionNumber,
    score,
    setScore,
    hightlightCorrectIfWrong,
    setIsCorrectAnswerHighligting,
    isButtonPressed,
    setIsButtonPressed,
  } = props

  const navigate = useNavigate()
  const [buttonAnswerClassName, setButtonAnswerClassName] = useState('answer')
  const [isBtnPressedChangeClassName, setIsBtnPressedChangeClassName] =
    useState(true)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)
  const [isWrongAnswer, setIsWrongAnswer] = useState(false)

  useEffect(() => {
    isBtnPressedChangeClassName
      ? setButtonAnswerClassName('answer')
      : setButtonAnswerClassName('selected-answer')
    if (isCorrectAnswer) {
      setButtonAnswerClassName('correct-answer')
    }
    if (isWrongAnswer) {
      setButtonAnswerClassName('wrong-answer')
      setIsCorrectAnswerHighligting(true)
    }
  }, [isBtnPressedChangeClassName, isCorrectAnswer, isWrongAnswer])

  useEffect(() => {
    if (hightlightCorrectIfWrong && answer === rightAnswer) {
      setButtonAnswerClassName('correct-answer')
    }
  }, [hightlightCorrectIfWrong])

  const onHover = (event) => {
    if (event.type === 'mouseenter' && !isButtonPressed) {
      setButtonAnswerClassName('answerHover')
    }
    if (event.type === 'mouseleave') {
      setButtonAnswerClassName('answer')
    }
  }

  const onClickHandler = () => {
    if (isButtonPressed) return
    setIsButtonPressed(true)

    if (answer === rightAnswer) {
      setButtonAnswerClassName('selected-answer')
      animateAnswerWithSetTimeout(
        setIsCorrectAnswer,
        setIsBtnPressedChangeClassName
      )
      setTimeout(() => {
        goNextQuestion(questionNumber + 1)
        setScore(calculateStartingScore(score))
      }, 2100)
    } else {
      setButtonAnswerClassName('selected-answer')
      animateAnswerWithSetTimeout(
        setIsWrongAnswer,
        setIsBtnPressedChangeClassName
      )
      setTimeout(() => {
        navigate('gameover', { replace: true })
      }, 2300)
    }
  }

  return (
    <div id={`id${index}`} className={styles.answerContainer}>
      <button
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        className={`${styles[buttonAnswerClassName]}`}
        onClick={onClickHandler}
      >
        <span className={styles.answerLetter}>
          {String.fromCharCode(index + 65)}
        </span>
        {answer}
      </button>
    </div>
  )
}

export default ButtonAnswer
