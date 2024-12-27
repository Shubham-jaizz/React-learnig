import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router'

function Protected({children, authentication= true}) {
  const navigate = useNavigate()
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector(store => store.state)
  
  useEffect(() => {
    // if(authStatus === true){
    //   navigate('/');
    // }else if(authStatus === false){
    //   navigate('/login')
    // }
      //todo:make it more easy

      if(authentication && authStatus !== authentication){
        navigate('/login');
      }else if(!authentication && authStatus !== authentication){
        navigate('/');
      }
      setLoader(false);
  }, [authStatus, navigate,authentication]);
  
  return loader ? <h1>Loading...</h1>:<>{children}</>
}

export default Protected