import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Form from './Components/Form'
import Table from './Components/Table'
import One from './Components/One'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <One/>
      
    </>
  )
}

export default App
