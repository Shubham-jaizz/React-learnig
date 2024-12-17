import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { login,logOut } from './app/authSlice'
import authService from './appwrite/auth'
import './App.css'

function App() {
  const [loading,setLoading] =  useState(true);
  const dispatch  = useDispatch();

  useEffect(()=>{
    authService.getUser()
    .then((user)=>{
      dispatch(login(user));
    }).catch((error)=>{
      console.error(error);
    })
    .finally(
      console.log("User in not Autheticated")
    )
  },[])

  return (
    <>
      <div>So this is the blog app</div>
    </>
  )
}

export default App
