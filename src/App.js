import { useState } from 'react'

let count = 0;

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0 }
  ]) 
  const [newName, setNewName] = useState('')

  const handleInput = (e) => {
    setNewName(e.target.value);
    console.log(count)
  }

  const newEntry = (e) => {
    e.preventDefault();
    setPersons([...persons, {name: newName, id: ++count}]);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={(e) => handleInput(e)} />
        </div>
        <div>
          <button type="submit" onClick={e => newEntry(e)}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map(value => 
          {return (
          <p key={value.id}>{value.name}</p>)})
      }
    </div>
  )
}

export default App