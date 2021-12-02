import React from 'react'

export const Country = (props) => {
    const countryData = props.countryData;

    return (
        <div>
            <li>{countryData.name.common}</li>
        </div>
    )
}