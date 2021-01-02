import React from 'react';
import Hello from './Hello.js';

const App = () => {

  const name = "Peter";
  const age = 10;

  return(
  <div>
    <h1>Greetings</h1>
    <Hello name="Ben" age= {age}/>  
    <Hello name="Dave" age = {26 + 10}/>  
    <Hello name="Ken" age = {5} />  
  </div>
  )
}

export default App;
