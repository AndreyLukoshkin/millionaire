import styles from './StylesModules/QuestionsAndScores.module.css'

const Question = ({ currentQuestion }) => {
  return (
    <>
      <h1 className={styles.questionText}>{currentQuestion?.question}</h1>
    </>
  )
}

export default Question
