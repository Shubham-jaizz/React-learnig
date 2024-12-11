import React,{useContext,useId, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const userId = useId();
    let [userName,setUserName] = useState(null);
    let [password,setPassword] = useState(null);

    let {setData} = useContext(UserContext);
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        setData({userName,password})
    }

    return (
        <>
        <div className="login">
            <h2>login</h2>
            <input 
            value={userName}
            onChange={(e)=>{setUserName(e.target.value)}}
            type="text" 
            name="userName" 
            id={userId} />


            <input 
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            type="text" 
            name="userName" 
            id={userId} />

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default Login
