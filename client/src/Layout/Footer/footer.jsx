import React from 'react'
import './footer.scss'
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section id='Footer'>
        <div className="FooterArea">
          <div className="FooterOne">
            <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" /><br />
            <p>The simple, delicate and light design <br />
              makes it comfortable for everyone.</p><br />
            <div className="FooterIcons">
            <FaTwitter className='FaTwitter '/>
            <FaDribbble className='FaTwitter ' />
            <FaBehance className='FaTwitter '/>
            <FaInstagram className='FaTwitter '/>
            </div>
          </div>
          <div className="FooterTwo">
            <ul>
              <h2>Shop</h2>
              <li>Shopping</li>
              <li>Bicycle</li>
              <li>Bicycle Accessory</li>
              <li>Helmet</li>
            </ul>
          </div>
          <div className="FooterTwo">
            <ul>
              <h2>About Us</h2>
              <li>About Us</li>
              <li>Pagination</li>
              <li>Terms & Conditions</li>
              <li>Contact</li>
              <li>Accessories</li>
              <li>Term of use</li>
            </ul>
          </div>
          <div className="FooterTwo">
            <ul>
              <h2>Information</h2>
              <li>Address</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Products Return</li>
              <li>Wholesale Policy</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
