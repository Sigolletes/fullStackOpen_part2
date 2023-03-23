import { useState, useEffect } from 'react'
import requestsService from './services/requests'

const Notification = ({ message, alert }) => {
  if (message === null) {
    return null
  } else if (alert) {
    return (
      <div className='alert'>
        {message}
      </div>
    )
  } else {
    return (
      <div className='success'>
        {message}
      </div>
   )
  }
}

const RenderNumbers = ({filter, persons, setPersons, setMessage}) => {
  function deleting (person) {
    if (window.confirm(`Delete ${person.name}?`)) {
      requestsService
      .deletePerson(person.id)
      .then(() => {
      setPersons(persons.filter(p => p.id !== person.id))
      setMessage(
        `${person.name} has been deleted`
      )
      setTimeout(() => {
        setMessage(null)
      }, 4000)
      })
    }
  }

 /*  return (
    <>
      <div className='listItem'>
        <p className='inline'>Anna: 444</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Bea: 5555555</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Lorena: 12343424</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Jose: 4445678884</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Anna: 444</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Bea: 5555555</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Lorena: 12343424</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Jose: 4445678884</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Anna: 444</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Bea: 5555555</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Lorena: 12343424</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Jose: 4445678884</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Anna: 444</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Bea: 5555555</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Lorena: 12343424</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Jose: 4445678884</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Anna: 444</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Bea: 5555555</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Lorena: 12343424</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Jose: 4445678884</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Anna: 444</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Bea: 5555555</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Lorena: 12343424</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
      <div className='listItem'>
        <p className='inline'>Jose: 4445678884</p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting("Anna")}}>
          Delete
        </button> 
      </div>
    </>
  ) */

  if (filter.length > 0) {
    let reg = new RegExp(`^${filter}` , 'i')
    let filtered = persons.filter(person => person.name.match(reg))
    return filtered.map(person =>
      <div className='listItem' key={person.id}>
        <p className='inline' key={person.id}>{person.name}: {person.number} </p>
        <button className='inline dltBttn' 
          type='button'
          onClick={() => {deleting(person)}}>
          Delete
        </button> 
      </div>
    )
  } else {
    return persons.map(person => 
      <div className='listItem' key={person.id}>
        <p className='inline' key={person.id}>{person.name}: {person.number} </p>
        <button className='inline dltBttn' 
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
    <div className='input'>
      Filter: <input 
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
      <div className='input'>
        Name: <input 
            value={newName} 
            onChange={handleNameChange} 
            maxLength="20"
          />
      </div>
      <div className='input'>
        Number: <input 
            value={newNumber} 
            onChange={handleNumberChange}
            maxLength="15"
          />
      </div>
      <div className='bttnContainer'>
        <button className='addBttn' type="submit">Add</button>
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
  const [alert, setAlert] = useState(false)

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
            setAlert(false)
            setMessage(
              `${newName} has been updated`
            )
            setTimeout(() => {
              setMessage(null)
            }, 10000)
            setNewName('')
            setNewNumber('')
          })
          .catch(error => {
            console.log(error.response.data.error)
            setAlert(true)
            setMessage(
              `Error: ${error.response.data.error}`
            )
            // setPersons(persons.filter(p => p.name !== newName))
            // console.log(error)
            setTimeout(() => {
              setMessage(null)
              setAlert(false)
            }, 10000)
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
          setAlert(false)
          setMessage(
            `${newName} has been added to the phonebook`
          )
          setTimeout(() => {
            setMessage(null)
          }, 10000)
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          // this is the way to access the error message
          console.log(error.response.data.error)
          setAlert(true)
          setMessage(
            `Error: ${error.response.data.error}`
          )
          setTimeout(() => {
            setMessage(null)
            setAlert(false)
          }, 10000)
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
    <div className='container'>
      <div className='form'>
        <h2>Phonebook</h2> 
        <Filter filter={filter} handleFilter={handleFilter} />
        <h2>Add a new person</h2> 
        <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addPerson={addPerson} />
        <Notification message={message} alert={alert} />
      </div>
      <div className='phonebook'>
        <h2>Numbers</h2>
        <div className='list'>
          <RenderNumbers filter={filter} persons={persons} setPersons={setPersons} setMessage={setMessage} />
        </div>
      </div>
    </div>
  )
}

export default App