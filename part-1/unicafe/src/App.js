import React, { useState } from 'react';
import Title from './Title';
import Statistics from './Statistics';
import Button from './Button';

const App = (props) => {
  const [feedBack, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    avg: 0,
    positive: 0,
    isFeedback: false  
  })

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
      all: 0,
      avg: 0,
      positive: 0,
      isFeedback: false  
    })
  }

  const handleClick = (e) => {
    if(e === "G"){
      setFeedback({
        good: feedBack.good + 1,
        neutral: feedBack.neutral,
        bad: feedBack.bad,  
        isFeedback: true  
      })
    } else if(e === 'N'){
      setFeedback({
        good: feedBack.good,
        neutral: feedBack.neutral + 1,
        bad: feedBack.bad,  
        isFeedback: true  
      })
  
    } else {
      setFeedback({
        good: feedBack.good,
        neutral: feedBack.neutral,
        bad: feedBack.bad  + 1, 
        isFeedback: true  
      })    
    }
  }


  return (
    <div style={{paddingLeft: "40%", paddingTop: '10%'}}>
      <Title title="Give Feedback" />

      <br/>

      <Button onChange={handleClick}/>
            
      <br />

      <Title title="Statistics" />
      {/* Conditional Rendering using conditional operator
      {
      feedBack.isFeedback
      ? <Statistics data={feedBack} />
      : "No feedback given"
      } */}

      {/* Conditional rendering using && */}
      {((feedBack.isFeedback) && <Statistics data={feedBack} />)}
      {(!(feedBack.isFeedback) && "No feedback given")}
      <br/>
      {((feedBack.isFeedback) && (<button onClick={handleReset}>Reset</button>))}
      </div>
  );
}

export default App;