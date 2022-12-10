import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Fetch } from './comonent/fetch'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <div className="App">
        <Fetch/>

        <h1> My Foirst App DEployment welcome </h1>
    </div>
  )
}

export default App
