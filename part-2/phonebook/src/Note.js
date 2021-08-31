import React from 'react'

export const Note = (props) => {

    return(
        <div>
            <p key={props.name}>{props.name} {props.phone}</p>
        </div>
    )
}