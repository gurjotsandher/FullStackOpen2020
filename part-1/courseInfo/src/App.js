import React from 'react'

// const App = () => {
//     const course = 'Half Stack application development'
//     const part1 = 'Fundamentals of React'
//     const exercises1 = 10
//     const part2 = 'Using props to pass data'
//     const exercises2 = 7
//     const part3 = 'State of a component'
//     const exercises3 = 14

//     return (
//         <div>
//             <h1>{course}</h1>
//             <p>
//                 {part1} {exercises1}
//             </p>
//             <p>
//                 {part2} {exercises2}
//             </p>
//             <p>
//                 {part3} {exercises3}
//             </p>
//             <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//         </div>
//     )
// }

// export default App

// const App = () => {

//         const course = 'Half Stack application development'

//         let names = [
//             'Fundamentals of React',
//             'Using props to pass data',
//             'State of a component'
//         ]
        
//         let exercises = [
//         10,
//         7,
//         14
//         ]  

//     return (
//       <div>
//         <Header course={course} />
//         <br/>
//         <Content parts={names} />
//         <br/>
//         <Total  total={exercises[0] + exercises[1] + exercises[2]}/>
//       </div>
//     )
//   }
// 
// export default App


import Content from './Content'
import Header from './Header'
import Total from './Total'

  const App = () => {
    const course = {
      
      name: 'Half Stack application development',
      
      parts: [
        {
        name: 'Fundamentals of React',
        exercises: 10
        },
        
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        
        {
          name: 'State of a component',
          exercises: 14
        }
    
    ]
  
  }
  
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
    )
  }

  export default App