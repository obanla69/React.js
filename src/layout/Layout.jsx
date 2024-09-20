import React from 'react'
import Headers from '../components/Header';
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'

 const Layout = () => {
  return (
    <div>
        <Headers/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
export default Layout;
