import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Foorter/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
