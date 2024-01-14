import React from 'react';
import './navbar.scss'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
    <div className='navbar'>
       <ul className='switchs'>
                <li><NavLink to={"/home"}>Home</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
               
                <li><NavLink to={"/shop"}>Shop</NavLink></li>
                 <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>

            </ul>
    </div>
    </nav>
  )
}

export default Navbar
