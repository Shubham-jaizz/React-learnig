import { useCallback, useEffect, useState,useRef } from 'react'



function App() {
  let [password, setPassword] = useState('');
  let [numeric, setNumeric] = useState(false);
  let [char, setchar] = useState(false);
  let [length,setLength] = useState(8);
  let passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw";
    if(char){
      str += "!@#$%^&*()-+=?^`[]{}";
    }
    if(numeric){
      str += "0123456789";
    }
    for (let index = 0; index < length; index++) {
       let i =  Math.floor(Math.random()*str.length +1);
       pass += str.charAt(i); 
    }
    setPassword(pass);

  },[length,char,numeric,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 4);
    console.dir(passwordRef)
    window.navigator.clipboard.writeText(password)
  }, [password])

  
  useEffect(()=>{
    passwordGenerator();
  },[length,char,numeric,passwordGenerator])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref = {passwordRef}             
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
          
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={numeric}
            id="numberInput"
            onChange={() => {
                setNumeric((prev) => !prev);
            }}
        />
        <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={char}
                id="characterInput"
                onChange={() => {
                    setchar((prev) => !prev )
                }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
