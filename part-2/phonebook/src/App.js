import React, { useState } from "react"
import { Note } from './Note'
import { Persons } from './Persons'
import { PersonForm } from './PersonForm'
import { Filter } from './Filter'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newPerson, setNewPerson] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newPerson,
      number: newNumber
    }

    let personNames = persons.map(n => n.name)
    console.log(personNames)

    if (personNames.find(name => name === newPerson)) {
      alert(`${newPerson} already exists!`)
    }

    else {
      setPersons(persons.concat(personObject))
      setNewPerson('')
      setNewNumber('')
    }
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNameFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toUpperCase().includes(nameFilter.toUpperCase()))

  return (

    <div>
      <h2>Phone Book</h2>
      <Filter filter={nameFilter} handler={handleFilter} />
      <h3>Add a new person</h3>
      <PersonForm addPerson={addPerson} newPerson={newPerson} handlePersonChange={handlePersonChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h3>Numbers</h3>
      <Persons namesToShow={namesToShow} />
    </div>
  )
}

export default App;
