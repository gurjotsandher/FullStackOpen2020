// export const Part = ({part}) => {
//   return (
      
//       <p>
//         {part.name} {part.exercises}
//       </p>    
//     )
//   }

















import React from 'react'

export const Part = (props) => {

    return (
        <div>
            <li key={props.partId}>{props.title} {props.amount}</li>
        </div>
    )
}


















































