import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import {BrowserRouter} from "react-router-dom"
import WishlistProvider from './Context/wishlistContext.jsx'
import BasketProvider from './Context/basketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WishlistProvider>
      <BasketProvider>
    <BrowserRouter> 
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </BrowserRouter>
    </BasketProvider>
   </WishlistProvider>
  </React.StrictMode>,
)
