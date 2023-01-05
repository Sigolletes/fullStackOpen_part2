import { useState, useEffect } from 'react'
import requestsService from './services/requests'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className='success'>
      {message}
    </div>
  )
}

const RenderNumbers = ({filter, persons, setPersons}) => {
  function deleting (person) {
    if (window.confirm(`Delete ${person.name}?`)) {
      requestsService
      .deletePerson(person.id)
      .then(() => {
      setPersons(persons.filter(p => p.id !== person.id))
      })
    }
  }
  if (filter.length > 0) {
    let reg = new RegExp(`^${filter}` , 'i')
    let filtered = persons.filter(person => person.name.match(reg))
    return filtered.map(person =>
      <div>
        <p key={person.id}>{person.name}: {person.number}</p>
        <button 
          type='button'
          onClick={() => {deleting(person)}}>
          Delete
        </button> 
      </div>
    )
  } else {
    return persons.map(person => 
      <div>
        <p key={person.id}>{person.name}: {person.number}</p>
        <button 
          type='button'
          onClick={() => {deleting(person)}}>
          Delete
        </button> 
      </div>
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
  const [message, setMessage] = useState(null)

  useEffect(() => {
    requestsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)){
      if (window.confirm(`${newName} is already added to phonebook. Replace the old number with the new one?`)) {
        const personObject = {
          name: newName,
          number: newNumber
        }
        let idUpdate = persons.find(p => p.name === newName).id
        requestsService
          .update(idUpdate, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
            setMessage(
              `${newName} has been updated`
            )
            setTimeout(() => {
              setMessage(null)
            }, 5000)
            setNewName('')
            setNewNumber('')
          })
      } else {
        setNewName('')
        setNewNumber('')
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      requestsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(
            `${newName} has been added to the phonebook`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
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
      <Notification message={message} />
      <RenderNumbers filter={filter} persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App