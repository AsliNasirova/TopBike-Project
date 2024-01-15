import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './Layout/MainLayout/mainlayout'
import Home from './Pages/Home/home'

import Wishlist from './Pages/Wishlist/wishlist';
import Detail from './Pages/Detail/detail'
import ShopPage from './Pages/Shop/shop'
import Contact from './Pages/Contact/contact'
import Basket from './Pages/Basket/basket'

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
          <Route path="/basket" element={<Basket/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
