import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hira from './Components/Hira'
import Sony from './Components/Sony'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Hira/>
   <Sony/>
  )
}

export default App
