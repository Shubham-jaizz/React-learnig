import React from 'react'

function Container({children}) {
  //this container used to decorate alll the elements to use csss
    return <div className=' w-full max-w-7xl mx-auto px-4'>{children}</div>;//if code is one liner we can use this syntax
  
}
export default Container