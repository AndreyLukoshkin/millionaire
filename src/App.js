import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GameStart from './components/GameStart'
import Game from './components/Game'
import GameOver from './components/GameOver'
import { useState } from 'react'

function App() {
  const [score, setScore] = useState(0)

  return (
    <BrowserRouter>
      <div className="App"></div>
      <Routes>
        <Route path="/" element={<GameStart />}></Route>
        <Route
          path="/game"
          element={<Game score={score} setScore={setScore} />}
        ></Route>
        <Route
          path="/game/gameover"
          element={<GameOver score={score} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
