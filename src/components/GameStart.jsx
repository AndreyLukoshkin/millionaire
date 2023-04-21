import React from 'react'
import styles from './GameStart.module.css'
import { Link } from 'react-router-dom'

const GameStart = () => {
  return (
    <div>
      <div className={styles.backgroundGradient}>
        <div className={styles.mainDiv}>
          <img src="images/hand.SVG" alt="hand" />
          <div className={styles.h1button}>
            <h1 className={styles.mainText}>Who wants to be a millionaire?</h1>
            <div
              className={styles.buttonStart}
              onClick={() => {
                document.querySelector('#linkId').click()
              }}
            >
              <Link id="linkId" className={styles.buttonText} to="game">
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameStart
