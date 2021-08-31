// Step by step version

// export const Total = ({ course }) => {
//   let arr1 = course.map(e=>{
//     return e.exercises
//   })

//   const reducer = (accumulator, currentValue) => accumulator + currentValue;

//   let sum = arr1.reduce(reducer);
  
//   return(
//     <p>Number of exercises {sum}</p>
//   ) 
// }


// Optimized
// export const Total = ({ course }) => {
//   const total = course.map(e => e.exercises).reduce((s,p) => s+p)

//   return(
//     <strong>total of exercises {total}</strong>
//   ) 
// }


import React from 'react'

export const Total = (props) => {
    
    const total = props.parts

    return (
        <div>
            <strong>total of {total}</strong>
        </div>
    )
}















































































































