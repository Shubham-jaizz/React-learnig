import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { logOut as authLogout } from '../../src/app/authSlice'
import authService from '../../src/appwrite/auth'
import { useNavigate } from 'react-router'
function LogOutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const logoutHandler = async()=>{
      try {
         await authService.logout();
          dispatch(authLogout());
          navigate('/login')
        
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <button
     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
     onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogOutButton