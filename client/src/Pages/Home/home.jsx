import React from 'react'
import Headerr from '../../Components/HeaderHome'
import LatestNews from '../../Components/LatestNews/latestNews'
import NewProduct from '../../Components/NewProduct/newProduct'
import Only from '../../Components/OnlyOnline'
import Services from '../../Components/ServicesHome'
import Shopify from '../../Components/Shopify/shopify'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <>
   <Helmet>
    <title>
      Home Page
    </title>
   </Helmet>
    <div>
      <Headerr/>
      <Services />
      <NewProduct />
      <Shopify />
      <Only />
      <LatestNews />

    </div>
     </>
  )
}

export default Home
