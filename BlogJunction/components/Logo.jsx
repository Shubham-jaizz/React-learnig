import React from 'react'
import logo from './../public/log.webp'

function Logo({width='100px'}) {
  return (
    <div>
      <img src={logo} alt="logo-Image" srcset="" className='w-1/6 rounded-xl' />
    </div>
  )
}

export default Logo