import React from 'react'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
import { Outlet } from 'react-router-dom'

function Mainlayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Mainlayout
