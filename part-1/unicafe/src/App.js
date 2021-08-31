// import React, { useState } from 'react';
// import Title from './Title';
// import Statistics from './Statistics';
// import Button from './Button';

// const App = (props) => {
//   const [feedBack, setFeedback] = useState({
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     all: 0,
//     avg: 0,
//     positive: 0,
//     isFeedback: false  
//   })

//   const handleReset = () => {
//     setFeedback({
//       good: 0,
//       neutral: 0,
//       bad: 0,
//       all: 0,
//       avg: 0,
//       positive: 0,
//       isFeedback: false  
//     })
//   }

//   const handleClick = (e) => {
//     if(e === "G"){
//       setFeedback({
//         good: feedBack.good + 1,
//         neutral: feedBack.neutral,
//         bad: feedBack.bad,  
//         isFeedback: true  
//       })
//     } else if(e === 'N'){
//       setFeedback({
//         good: feedBack.good,
//         neutral: feedBack.neutral + 1,
//         bad: feedBack.bad,  
//         isFeedback: true  
//       })
  
//     } else {
//       setFeedback({
//         good: feedBack.good,
//         neutral: feedBack.neutral,
//         bad: feedBack.bad  + 1, 
//         isFeedback: true  
//       })    
//     }
//   }

//   return (
//     <div style={{paddingLeft: "40%", paddingTop: '10%'}}>
//       <Title title="Give Feedback" />

//       <br/>

//       <Button onChange={handleClick}/>
            
//       <br />

//       <Title title="Statistics" />
//       {/* Conditional Rendering using conditional operator
//       {
//       feedBack.isFeedback
//       ? <Statistics data={feedBack} />
//       : "No feedback given"
//       } */}

//       {/* Conditional rendering using && */}
//       {((feedBack.isFeedback) && <Statistics data={feedBack} />)}
//       {(!(feedBack.isFeedback) && "No feedback given")}
//       <br/>
//       {((feedBack.isFeedback) && (<button onClick={handleReset}>Reset</button>))}
//       </div>
//   );
// }

// export default App;

import React, { useState } from 'react'

const StatisticLine = (props) => {
    if(props.text === "good"){
      return(
        <div>
          <td>
            {props.value}
          </td>
        </div>
      )
    }

    if(props.text === "bad"){
      return(
        <div>
          <td>{props.value}</td>
        </div>
      )
    }
    
    if(props.text === "neutral"){
      return(
        <div>
          <td>{props.value}</td>
        </div>
      )
    }

    if(props.text === "all"){
      return(
        <div>
        <td>{props.value}</td>
        </div>
      )
    }
    
    if(props.text === "average"){
      return(
        <div>
          <td>{props.value}</td>
        </div>
      )
    }

    if(props.text === "percentage"){
      return(
        <div>
          <td>{props.value}%</td>
        </div>
      )
    }
    
}

const Statistics = ({good, bad, neutral, all}) => {
  if(all > 0){
    return(
      <div>
        <table>
          <tr>
            <h1>Statistics</h1>
          </tr>
          <tr>
            <td>Good</td>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>  
            <td>Neutral </td>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <td>Bad </td>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <td>All </td>
            <StatisticLine text="all" value={all} />
          </tr>
          <tr>          
            <td>Average </td>
            <StatisticLine text="average" value={(good - bad) / all} />
          </tr>
          <tr>
            <td>Positive </td>
            <StatisticLine text="percentage" value={(good / all)*100} />
          </tr>
        </table>
    </div>
    )
  }
    return (
    <div>
      <p>No feedback given</p>
    </div>
  )
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)

  //Functions
  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App













































