import React from 'react'
import NewProduct from '../../Components/NewProduct/newProduct'
import "./shop.scss"
import { Helmet } from 'react-helmet-async'

const ShopPage = () => {
  return (
    <>
    <Helmet>
      <title>
        Shop Page
      </title>
    </Helmet>
    <div>
      
      <section id='doubleimages'>
        <div className='img1'>
          <h2>Products</h2>
          <div className='txt'>
         
            <strong className='bg'>Products</strong>
          </div>
        </div>
        <div className="img2">
          <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Biking-Basics-5-Essential-Bike-Tools-to-Take-with-You-on-a-Cycling-Adventure.jpg?v=1613576668" alt="" />
          <div className="info">
            <h3 >A NEW COLLECTION</h3>
            <p>SALE UP TO 30%</p>
            <button>Shop Now</button>
          </div>
        </div>
      </section>
     
     <NewProduct/>
    </div>
    </>
  )
}

export default ShopPage