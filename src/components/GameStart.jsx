import React from 'react'
import styles from './StylesModules/GameStart.module.css'
import { useNavigate } from 'react-router-dom'

const GameStart = ({ setScore }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('game', { replace: false })
    setScore(0)
  }

  return (
    <>
      <div className={styles.backgroundGradientWrapper}>
        <div className={styles.hand}></div>
        <h1 className={styles.mainText}>Who wants to be a millionaire?</h1>
        <button className={styles.buttonStart} onClick={handleClick}>
          Start
        </button>
      </div>
    </>
  )
}

export default GameStart
