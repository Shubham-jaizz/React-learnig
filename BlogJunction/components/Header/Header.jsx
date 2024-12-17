import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {store} from '../../src/app/store'
function Header() {
    const selector = useSelector();
    function getTheBlogs(){
        const data = useSelector(store.userData);
        
    }
  return (
  
    <div>Header-Data</div>
  )
}

export default Header