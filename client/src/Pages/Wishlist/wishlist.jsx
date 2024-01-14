import React, { useContext } from 'react'
import './wishlist.scss'
import { WishlistContext } from '../../Context/wishlistContext'

const Wishlist = () => {
  const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <>
  
    {
      wish && wish.map(x=>
        <ul>
        <li><img src={x.image}alt="" /></li>
        <li>{x.title}</li>
        <li>{x.price}</li>
        <li onClick={()=>deleteWish(x)}>Delete</li>
        </ul>
        )
    }
    </>
  )
}

export default Wishlist