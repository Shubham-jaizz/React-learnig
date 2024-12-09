import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Contact from './components/contactUs/ContactUs.jsx'
import User from './components/user/User.jsx'
import Github, { quickResponse } from './components/github/Github.jsx'

// const router = BrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
  
//       }
//     ]
//   }
//   ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact/>} />
      <Route path="user/:userId" element={<User/>}/>
      <Route 
      loader={quickResponse}
      path="github"
      element={<Github/>} 
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
