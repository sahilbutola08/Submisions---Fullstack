import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}


const Statistics = (props) => {
  let sum = props.good+props.bad+props.neutral;
  if(props.good == 0 && props.bad == 0 && props.neutral == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given.</p>
      </div>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={props.good}/>
      <StatisticsLine text="neutral" value={props.neutral}/>
      <StatisticsLine text="bad" value={props.bad}/>
      <p>all {sum}</p>
      <p>average {(props.good+props.bad*-1)/sum}</p>
      <p>positive {(props.good/sum)*100} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good+neutral+bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text="good"></Button>
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral"></Button>
      <Button handleClick={() => setBad(bad+1)} text="bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
