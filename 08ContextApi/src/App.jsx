import React from 'react'
import Login from './components/login'
import Profile from './components/profile'
import UserContextProvider from './context/UserContextProvider'


function App() {

  return (
    <>
      <UserContextProvider>
      <h2>tumhari maki chut</h2>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  )
}

export default App
