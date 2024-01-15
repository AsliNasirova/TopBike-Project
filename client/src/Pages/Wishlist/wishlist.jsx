import React, { useContext } from 'react'
import './wishlist.scss'
import { WishlistContext } from '../../Context/wishlistContext'

const Wishlist = () => {
  const {wish,deleteWish}=useContext(WishlistContext)
  return (
    <>
  <div className="wishlistArea">
    {
      wish && wish.map(x=>
        <ul>
        <li><img src={x.image}alt="" /></li>
        <li>{x.title}</li>
        <li>{x.price}</li>
        <button className='delete_btn'><li onClick={()=>deleteWish(x)}>Delete</li></button>
        </ul>
        )
    }
    </div>
    </>
  )
}

export default Wishlist