import React, { useEffect, useState } from 'react'
import Card from '../Card/card'
import './newProduct.scss'

const NewProduct = () => {

    const[product,setProduct]=useState([])
    async function getProduct() {
        const data=await fetch("http://localhost:3000/names")
        const res=await data.json()
        console.log(res);
        setProduct(res)
    }
    useEffect(()=>{
        getProduct()
    },[])
    console.log(product);
  return (
    <section id='newProduct'>
    <div className='newProductArea'>
    <div className="titleProduct">
        <h1>New Product</h1>

    </div>
    <div className="cardAreaproduct">
        {product && product.map((item)=>(
            <div className="cardBox">
                <Card key={item._id} id={item._id} title={item.title} image={item.image} price={item.price} product={item}/>
            </div>
        )

        )}
    </div>
    </div>
    </section>
  )
}

export default NewProduct