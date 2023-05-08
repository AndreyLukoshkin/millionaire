import styles from './StylesModules/QuestionsAndScores.module.css'

const Question = ({ currentQuestion }) => {
  const someFuncTestError = () => {
    const obj = {}
    return obj.map((el) => console.log(el))
  }

  return (
    <>
      <h1 onClick={someFuncTestError} className={styles.questionText}>
        {currentQuestion?.question}
      </h1>
    </>
  )
}

export default Question
