import { useNavigate } from 'react-router-dom'
import styles from './StylesModules/GameOver.module.css'

const GameOver = ({ finalScore, score }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.backgroundGradientWrapper}>
        <div className={styles.hand}></div>
        <div className={styles.totalAndScores}>
          <h1 className={styles.totalScore}>Total score:</h1>
          <h1 className={styles.scores}>
            {score ? finalScore : `$${score}`} earned
          </h1>
        </div>
        <button
          className={styles.buttonTryAgain}
          onClick={() => navigate('/', { replace: true })}
        >
          Try again
        </button>
      </div>
    </>
  )
}

export default GameOver
