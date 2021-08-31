import React from "react"

export const Filter = (props) => {
    
    return (
        <div>
            <strong>Search Name: </strong>
            <input value= {props.filter} onChange={props.handler}/>
        </div>
    )
}