import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from "./components/card"
function App() {
  const [count, setCount] = useState(0)
  const artist = {
    writer:"Sukumar",
    director:"Allu Arjun",
    actress:"Shrivalli"
  }
  return (
    <>
      <h1 className='bg-green-400 mb-4'>THis is hte user name</h1>
      <Card songName="pushpa2-feelings-jathraani" makers ={artist}/> {/*use the curly braces to give some arrays and objects as props*/}
      <Card songName="kamli-jathraani" makers=''/>

    </>
  )
}

export default App
