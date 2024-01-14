import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './Layout/MainLayout/mainlayout'
import Home from './Pages/Home/home'
import About from './Pages/About/about'
import Wishlist from './Pages/Wishlist/wishlist';
import Detail from './Pages/Detail/detail'
import ShopPage from './Pages/Shop/shop'
import Contact from './Pages/Contact/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Mainlayout/>}>
          <Route path="/home" element={<Home />}></Route>
         
         
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/:id" element={<Detail/>}></Route>
          <Route path="/shop" element={<ShopPage/>}></Route> 
          <Route path="/wishlist" element={<Wishlist/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
