import styles from './StylesModules/QuestionsAndScores.module.css'

const Question = ({ currentQuestion }) => {
  return (
    <div>
      <h1 className={styles.questionText}>{currentQuestion?.question}</h1>
    </div>
  )
}

export default Question
