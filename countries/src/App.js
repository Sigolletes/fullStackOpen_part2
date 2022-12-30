import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

const Filter = ({filter, handleFilter}) => {
  return (
    <div>
      Find countries: <input
        type='text'
        value={filter}
        onChange={handleFilter}
      />
    </div>
  )
}

const RenderCountries = ({filter, setFilter, countries}) => {
  const showCountry = (e) => {
    setFilter(e.target.getAttribute('a-key'))
  }

  let reg = new RegExp(`${filter}` , 'i')
  let filtered = countries.filter(country => country.name.common.match(reg) || country.name.official.match(reg))

  if (filter.length < 1) {

  } else if (filter.length > 0 && filtered.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (filter.length > 0 && filtered.length === 1) {
    let languages = Object.values(filtered[0].languages)
    return (
      <div>
        <h1>{filtered[0].name.common}</h1>
        <p>Capital: {filtered[0].capital}</p>
        <p>Area: {filtered[0].area}</p>
        <h3>Languages:</h3>
        <ul>
          {languages.map(language =>
            <li key={filtered[0].cioc + language}>{language}</li>
          )}
        </ul>
        <img src={filtered[0].flags.png} />
      </div>
    )
  } else if (filter.length > 0 && filtered.length <= 10) {
    return filtered.map(country =>
      <div key={country.cioc}>
        <p className='inline'>{country.name.common} </p>
        <button className='inline' type='button' a-key={country.name.common} onClick={showCountry}>SHOW</button>
      </div>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <Filter filter={filter} handleFilter={handleFilter} />
      <RenderCountries filter={filter} setFilter={setFilter} countries={countries} />   
    </div>
  )
}

export default App
