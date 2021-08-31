// import React from 'react';
// import Part from './Part';

// export const Content = (props) => {
//     let myContent = props.parts;

//     return (
//         <div>
//             <Part name={myContent[0].name} />
//             <Part name={myContent[1].name} />
//             <Part name={myContent[2].name} />
//         </div>
//     )
// }
import React from 'react'
import Part from './Part'

export const Content = (props) => {
    let parts = props.parts;

    console.log(parts)
    return(
        <div>
            <Part name={parts[0].name} />
            <Part name={parts[1].name} />
            <Part name={parts[2].name} />
        </div>
    )
}

export default Content



































