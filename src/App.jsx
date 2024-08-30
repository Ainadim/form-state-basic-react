
import { useState } from 'react'
import './App.css'
import RefExample from './RefExample'

function App() {

  const [nameInput, setNameInput] = useState()
  const [mail, setMailInput] = useState()
  const [password, setPassword] = useState()

  const [error, setError] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password.length < 6) {
      setError("Please provide the password with 6 or more character ")
    }
    else {
      console.log(nameInput, mail, password);
    }
  }

  const handleNameinput = (e) => {
    console.log(e.target.value);
    setNameInput(e.target.value)
  }

  const handleEmailInput = (e) => {
    console.log(e.target.value);
    setMailInput(e.target.value);
  }

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value)
  }
  return (
    <>
      <h1>Vite + React</h1>
      <h2>UseState</h2>
      <form onSubmit={handleSubmit} action="">
        <input onChange={handleNameinput} type="text" name='Name' />
        <br />
        <input onChange={handleEmailInput} required type="email" name='Email' />
        <br />
        <input onChange={handlePassword} required type="password" name="Password" required />
        <br />
        <input type="submit" value="Submit" />

        {
          error && <p>{error}</p>
        }
      </form>
      <br />
      <div>
        <RefExample></RefExample>
      </div>

    </>
  )
}

export default App
