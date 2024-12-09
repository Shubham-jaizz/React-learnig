import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router'


//Outlet what it does it actually changes only the component of Outlet component and other except that remains same

function Layout() {
    return (
        <>
           <Header />
           <Outlet />
           <Footer /> 
        </>
    )
}

export default Layout
