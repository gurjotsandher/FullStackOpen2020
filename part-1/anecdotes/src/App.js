import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Best from './Best';

const App = (props) => {

  const [selected, setSelected] = useState(0)

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  });

  const rand = () => {

    const num = Math.floor(Math.random() * 6);
    return num;

  }

  const handleClick = () => {
    setSelected(
      rand()
    )
  }

  const handleVote = () => {
    console.log(selected);
    if(selected === 0){
      setPoints({
        0: points[0] + 1,
        1: points[1],
        2: points[2],
        3: points[3],
        4: points[4],
        5: points[5]    
      })
    } else if(selected === 1){
      setPoints({
        0: points[0],
        1: points[1] + 1,
        2: points[2],
        3: points[3],
        4: points[4],
        5: points[5]    
      })
    } else if(selected === 2){
      setPoints({
        0: points[0] ,
        1: points[1],
        2: points[2] + 1,
        3: points[3],
        4: points[4],
        5: points[5]    
      })
    } else if(selected === 3){
      setPoints({
        0: points[0] ,
        1: points[1],
        2: points[2],
        3: points[3] + 1,
        4: points[4],
        5: points[5]    
      })
    } else if(selected === 4) {
      setPoints({
        0: points[0],
        1: points[1],
        2: points[2],
        3: points[3],
        4: points[4] + 1,
        5: points[5]    
      })
    } else if(selected === 5) {
      setPoints({
        0: points[0],
        1: points[1],
        2: points[2],
        3: points[3],
        4: points[4],
        5: points[5]  + 1    

      })
    }
    console.log(points);
  }


  return (
    <div>
      <h2>{props.anecdotes[selected]}</h2>
      <br/>

      <h4>Votes: {points[selected]}</h4>
      <br/>
      
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next anecdote</button>

      <h3>The anecdote with the most votes</h3>

      <Best data={points} anecdotes={anecdotes}/>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
document.getElementById('root')
);