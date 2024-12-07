import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function bgChange(e) {
    console.log(e.target.parentElement)
    console.log(e.target.parentElement.classList)
    console.log(document.body.classList);
    document.body.className =`bg-${e.target.id}-500`;
    // document.body.classList.add(`bg-${e.target.id}-500`)
  }
  return (
    <>
     
        <div className="w-full p-3 bg-orange-100 flex justify-evenly rounded-xl">
          <button onClick={bgChange} className='ml-2 bg-yellow-500' id="yellow" type="button">yellow</button>
          <button onClick={bgChange} className='ml-2 bg-red-500 'id = "red" type="button">red</button>
          <button onClick={bgChange} className='ml-2 bg-green-500 'id = "green" type="button">green</button>
          <button onClick={bgChange} className='ml-2 bg-blue-500 'id = "blue" type="button">blue</button>
          <button onClick={bgChange} className='ml-2 bg-indigo-500 'id = "indigo" type="button">indio</button>
          <button onClick={bgChange} className='ml-2 bg-violet-500 'id = "violet" type="button">violet</button>
          <button onClick={bgChange} className='ml-2 bg-orange-500 'id = "orange" type="button">orange</button>
        </div>
      
    </>
  )
}

export default App
