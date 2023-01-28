import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Stats = ({text, feedback}) => {
  return (
    <p>{text} {feedback}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"></Button>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"></Button>
      <Button handleClick={() => setBad(bad+1)} text="bad"></Button>

      <h1>statistics</h1>
      <Stats text="good" feedback={good}/>
      <Stats text="neutral" feedback={neutral}/>
      <Stats text="bad" feedback={bad}/>
    </div>
  )
}

export default App
