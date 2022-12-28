import { useState, useEffect } from 'react'
import axios from 'axios'

const RenderNumbers = ({filter, persons}) => {
  if (filter.length > 0) {
    let reg = new RegExp(`^${filter}` , 'i')

    let filtered = persons.filter(person => person.name.match(reg))
    return filtered.map(person =>
      <p key={person.name}>{person.name}: {person.number}</p>
    )
  } else {
    return persons.map(person => 
      <p key={person.name}>{person.name}: {person.number}</p> 
    )
  }
}

const Filter = ({filter, handleFilter}) => {
  return (
    <div>
      Filter shown with: <input 
          type='text'
          value={filter}
          onChange={handleFilter}
        />
    </div>
  )
}

const PersonForm = ({newName, handleNameChange, newNumber, handleNumberChange, addPerson}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        Name: <input 
            value={newName} 
            onChange={handleNameChange} 
          />
      </div>
      <div>
        Number: <input 
            value={newNumber} 
            onChange={handleNumberChange}
          />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2> 
      <Filter filter={filter} handleFilter={handleFilter} />

      <h2>Add a new person</h2> 
      <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addPerson={addPerson} />

      <h2>Numbers</h2>
        <RenderNumbers filter={filter} persons={persons} />
    </div>
  )
}

export default App