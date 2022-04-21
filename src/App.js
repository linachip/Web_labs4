import { useSelector } from 'react-redux'
import React, { useState } from 'react'

import Settings from './Components/Settings'
import Question from './Components/Question'
import FinalScreen from './Components/FinalScreen'
import Start from './Components/Start'

import './App.css'

function App() {
  const questions = useSelector((state) => state.questions)
  const questionIndex = useSelector((state) => state.index)

  const [start, setStart] = useState(false);

  let component

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />
  } else if (!questions.length) {
    component = <Settings />
  } else {
    component = <FinalScreen />
  }

  return (
    <div className="App">
      <div className="app-container">{start ? component : <Start props={setStart} />}</div>
    </div>
  )
}

export default App