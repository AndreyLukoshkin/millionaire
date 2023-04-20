import React from 'react'
import styles from './Info.module.css'

const GameStart = () => {
  return (
    <div className={styles.info}>
      <div className={styles.backgroundGradient}>
        <img src="images/hand.JPG" alt="hand" />
        <h1>Who wants to be a millionaire?</h1>
        <button>Start</button>
      </div>
    </div>
  )
}

export default GameStart
