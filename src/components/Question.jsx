import { useState } from 'react'
import styles from './StylesModules/QuestionsAndScores.module.css'

const Question = ({ currentQuestion }) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter((counter) => (counter += 1))
  }

  if (counter === 5) {
    throw new Error('I crashed!')
  }
  return (
    <h1 onClick={handleClick} className={styles.questionText}>
      {currentQuestion?.question}
    </h1>
  )
}

export default Question
