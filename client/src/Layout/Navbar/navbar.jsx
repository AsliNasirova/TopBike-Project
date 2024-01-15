import React from 'react';
import './navbar.scss'
import { NavLink } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";

function Navbar() {
  return (
    <nav>

      <div className='navbar'>
        <div className="title_navbar">
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289" alt="" />
        </div>
        <div className="switchArea">
          <ul className='switchs'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/shop"}>Shop</NavLink></li>
            <li><NavLink to={"/wishlist"}><CiHeart /></NavLink></li>

          </ul>
          <CiSearch />
          <CiShoppingBasket />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
