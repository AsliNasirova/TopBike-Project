import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './Layout/MainLayout/mainlayout'
import Home from './Pages/Home/home'
import About from './Pages/About/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Mainlayout/>}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
