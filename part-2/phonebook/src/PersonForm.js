import React, { useState } from "react"

export const PersonForm = (props) => {

    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    Name: <input value={props.newPerson} onChange={props.handlePersonChange} />
                </div>
                <div>
                    Number: <input value={props.newNumber} onChange={props.handleNumberChange} />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
        </div>
    )
}