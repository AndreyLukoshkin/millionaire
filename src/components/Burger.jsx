import React, { useState } from 'react'
import styles from './StylesModules/QuestionsAndScores.module.css'

const Burger = ({ setUpScoresWrapper }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(true)
  const [burgerClassActive, setBurgerClassActive] = useState(
    'gameContainer__burger'
  )

  const openBurger = () => {
    setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen)
    if (isBurgerOpen) {
      setBurgerClassActive('gameContainer__burger__active')
      setUpScoresWrapper('upScoreWrapper')
    } else {
      setBurgerClassActive('gameContainer__burger')
      setUpScoresWrapper('scoreWrapper')
    }
  }

  return (
    <div onClick={openBurger} className={`${styles[burgerClassActive]}`}>
      <span></span>
    </div>
  )
}

export default Burger
