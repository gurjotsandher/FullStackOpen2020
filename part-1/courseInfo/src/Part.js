// import React from 'react';

// const Part = (props) => {
//     return (
//         <div>
//             <p>{props.name}</p>
//         </div>
        
//     )
// }

// export default Part;


import React from 'react'

const Part = (props) => {
    const parts = props.parts
    console.log(parts)

    return(
        <div>
            {props.name}
            <br />
            <br />
        </div>
    )
}

export default Part










