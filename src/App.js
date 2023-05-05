import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameStart from './components/GameStart'
import Game from './components/Game'
import GameOver from './components/GameOver'
import scoresArray from './jsonQuestions/scoresArray'

function App() {
  const [score, setScore] = useState(0)

  let finalScore = ''
  scoresArray.forEach((el, i) => {
    if (scoresArray[i].value === score) finalScore = scoresArray[i].displayed
  })

  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route>
          <Route
            path="/*"
            index
            element={<GameStart setScore={setScore} />}
          ></Route>
          <Route
            path="/game"
            element={<Game score={score} setScore={setScore} />}
          ></Route>
          <Route
            path="/game/gameover"
            element={<GameOver score={score} finalScore={finalScore} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
