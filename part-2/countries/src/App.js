import React, { useState, useEffect } from "react";
import axios from 'axios'
import { Country } from './Country'
import { CountryDetail } from './CountryDetail'

const App = () => {

  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')
  const [weather, setWeather] = useState([])
  // const api_key = process.env.REACT_APP_API_KEY
  // const params = {
  //   access_key: api_key,
  //   query: 'New York'
  // }
  const handleFilter = (event) => {
    setCountryFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  // console.log('weather promise is below')
  // useEffect(() => {
  //   console.log('inside weather promise')
  //   axios
  //     .get('http://api.weatherstack.com/?', { params })
  //     .then(response => {
  //       console.log('within axios chaining')
  //       console.log(response)
  //     })
  // }, [])


  const countriesToShow = countries.filter(country => country.name.common.toUpperCase().includes(countryFilter.toUpperCase()))

  if (countriesToShow.length > 10) {
    return (
      <div>
        <strong>Find Countries: </strong>
        <input value={countryFilter} onChange={handleFilter} />
        <p>Data set is too large.</p>
      </div>
    )
  }

  if (countriesToShow.length === 1) {
    return (
      <div>
        <strong>Find Countries: </strong>
        <input value={countryFilter} onChange={handleFilter} />
        <CountryDetail
          name={countriesToShow[0].name.common}
          capital={countriesToShow[0].capital}
          population={countriesToShow[0].population}
          languages={countriesToShow[0].languages}
          flag={countriesToShow[0].flags.png}
        />
      </div>
    )
  }

  else {
    return (
      <div>
        <strong>Find Countries: </strong>
        <input value={countryFilter} onChange={handleFilter} />

        {countriesToShow.map(c => {
          if (countriesToShow.length <= 10 && countriesToShow.length >= 2) {
            return (
              <div>
                <Country countryData={c} />
                <button onClick={() => setCountries([c])}>Show</button>
              </div>
            )
          }
        })}
      </div>
    );
  }
}

export default App;
