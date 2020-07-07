import React from 'react'

export const Footer = (props) => {
    let numArr = props.parts;
    return (
        <div>
            <p>Number of exercises {numArr[0].exercises + numArr[1].exercises + numArr[2].exercises} </p>
        </div>
    )
}