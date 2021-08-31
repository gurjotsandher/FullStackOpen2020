// import { Part } from './Part';
// import { Total } from './Total';

// export const Content = ({ course }) => {

//   return (
//     <div>
//       {course.parts.map(p => {
//         return <Part key={p.id} part={p} /> 
//       })}

//       <Total course={course.parts} />

//     </div>
//   )
// }


import React from 'react'
import { Part } from './Part'
import { Total } from './Total'

export const Content = (props) => {
    const parts = props.courseInfo
    const amount = parts.map(a => a.exercises)
    const total = amount.reduce((s, p) => {
        return s += p
    }, 0)

    return (
        <div>
            {parts.map(c=> {
                return(
                    <div>
                        <Part title={c.name} amount={c.exercises} partId={c.id} />
                    </div>
                )
            })}

            <Total parts={total}/>
        </div>
    )
}










































































