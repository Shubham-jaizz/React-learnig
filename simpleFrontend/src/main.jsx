import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

function MyApp() {
  return(
    <>
    <h3>tumhara bai miya Bhai salman Khan</h3>
    </>
  )
}
const ReactElement = {
  type:'a',
  props:{
      href:"https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&t=428s",
      target:'_blank'
  },
  content:"click me to play music"

}

const userName = "Shubhujazz_1"

const ReactElement2 = React.createElement(
  'a',
  {href:"https://www.youtube.com/watch?v=kAOuj6o7Kxs&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&t=428s",target:'_blank'},
  "click me to play music",
  userName // it should be alwaays evaluated value as we can't give expressions inside any object and react covert this react element into reactELement object of its own type

)

ReactDOM.createRoot(document.getElementById('root')).render(
    // MyApp()  we can also render like this as it takes element and my app is function which returns element
    // <MyApp/> we can also give direct functional compnenent here by just declaring fucntion above
   
    // ReactElement reactElement does not run becuase we have given our own type,props,attributes, its true that react also takes the jsx and coverts into own element object but not ike our type thus out element object is not running

     ReactElement2 //ReactElement2 gives react element object which gives their own type,props,attributes thus it runs

    // <App />

)
