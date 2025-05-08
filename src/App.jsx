import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hira from './Components/Hira'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Hira/>
  )
}

export default App
