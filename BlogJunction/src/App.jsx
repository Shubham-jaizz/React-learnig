import React,{ useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { login,logOut } from './app/authSlice'
import authService from './appwrite/auth'
import './App.css'
import { Footer, Header } from '../components'
import { Outlet } from 'react-router'

function App() {
  let [loading,setLoading] =  useState(true);
  const dispatch  = useDispatch();

  useEffect(()=>{
    authService.getUser()
    .then((userData)=>{
       if (userData) {
         dispatch(login(userData));
       }else{
        dispatch(logOut())
       }
    }).catch((error)=>{
      console.error(error);
    })
    .finally(()=>setLoading(false));
  },[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500 hue-rotate-180'>
      <div className="w-full block">
        <Header/>
        <main>
        <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  ): null
}

export default App
