import React from 'react'
import Headerr from '../../Components/HeaderHome'
import LatestNews from '../../Components/LatestNews/latestNews'
import NewProduct from '../../Components/NewProduct/newProduct'
import Only from '../../Components/OnlyOnline'
import Services from '../../Components/ServicesHome'
import Shopify from '../../Components/Shopify/shopify'

function Home() {
  return (
    <div>
      <Headerr/>
      <Services />
      <NewProduct />
      <Shopify />
      <Only />
      <LatestNews />

    </div>
  )
}

export default Home
