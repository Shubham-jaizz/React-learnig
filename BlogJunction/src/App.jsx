import { useState } from 'react'
import Conf from './config/conf'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(Conf)
  return (
    <>
      <div>Blog Junction application</div>
    </>
  )
}

export default App
