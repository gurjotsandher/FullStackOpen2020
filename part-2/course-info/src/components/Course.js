// import { Header } from './Header';
// import { Content } from './Content';

// export const Course = ({ course }) => {
//     return(
//         <div>
//             <Header course={course}/>
//             <Content course={course}/>
//         </div>
//     );
// }




import React from 'react'
import { Header } from './Header'
import { Content } from './Content'

export const Course = (props) => {
    
    const content = props.course
    console.log(content)
   
    return (
        <div>
            {content.map(c => {
                return (
                    <div>
                        <Header listId = {c.id} headerTitle={c.name} />
                        <Content courseInfo={c.parts}/>
                    </div>
                )
            })}
        </div>
    )
}















































































































