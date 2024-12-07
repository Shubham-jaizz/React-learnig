import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
// let  counter = 0; it will not run or change ui only react can react on change of events thus we use hooks 
// always use hooks inside function componenent and their fucntions also

  let [count, setCount] = useState(0)// here we can give anything in the parameter of useState function

  function upgrade(){
    if(count >19) return

    setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);  // in this type of situation useState works with batches and the repetitive works are igniored
    
    // so we use like 
    setCount((prevCounter)=> prevCounter+1); // so setCount takes a call back and this takes previous values of counter as api
    setCount((prevCounter)=> prevCounter+1);
    setCount((prevCounter)=> prevCounter+1);
  }
  function downgrade(){
    if (count ===  0) return
    count = count - 1;
    setCount(count);
  }
  
  return (
    <>
      <h1>Counter App {count}</h1>
      <p>counter No:{count}</p>
      <button onClick={upgrade}>click me to upgrade: {count}</button>
      <br />
      <button onClick={downgrade}>click me to downgrade: {count}</button>


      

    </>
  )
}

export default App
