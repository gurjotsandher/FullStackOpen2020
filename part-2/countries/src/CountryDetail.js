import React from 'react'
import { Language } from './Language'

export const CountryDetail = (props) => {
    const languages = props.languages;

    return(
        <div>
            <h1>{props.name}</h1>
            <br />
            <p>Capital: {props.capital}</p>
            <p>Population: {props.population}</p>
            <br />
            <h1>Languages</h1>
            {Object.keys(languages).map((lang) => {
                return(
                    <div>
                    <Language language={languages[lang]}/>
                </div>
                )
            })}
            <br />
            <img alt={props.name + ' flag'}width="200" height="100" src={props.flag}/>

        </div>
    )
}