import React, { useContext } from 'react'
import './basket.scss'
import {BasketContext} from '../../Context/basketContext'

const Basket = () => {
    const{basket,deleteBasket,increaseBasket,decreaseBasket}=useContext(BasketContext)
  return (
    <>
<div className="basketArea">
{basket&&basket.map(x=>
<ul className='text_basket'>
    <li><img src={x.image} alt="" /></li>
    <li><h3>{x.title}</h3></li>
    <li>{x.price}</li>
    <li><button className='deleteBasket_btn' onClick={()=>deleteBasket(x)}>Delete</button></li>
    <div className="countPart_basket">
    <li><button className='inreaseDecrease_btn' onClick={()=>increaseBasket(x)}>+</button></li>
    <p>{x.count}</p>
    <li><button className='inreaseDecrease_btn' onClick={()=>decreaseBasket(x)}>-</button></li>
    </div>
</ul>
)}</div>
    </>
  )
}

export default Basket