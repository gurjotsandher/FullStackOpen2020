import React from 'react'

export const Total = (props) => {
    const parts = props.parts

    return(
        <div>
            {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </div>
    )
}

export default Total