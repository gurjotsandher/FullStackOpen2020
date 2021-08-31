import React, { useState } from "react"
import { Note } from "./Note"

export const Persons = (props) => {

    const namesToShow = props.namesToShow

    return (
        <div>
            {namesToShow.map(person => {
                return (
                    <Note key={person.name.length * Math.random()} name={person.name} phone={person.number} />
                )
            })}

        </div>
    )
}