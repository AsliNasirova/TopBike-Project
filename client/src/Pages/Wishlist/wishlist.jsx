import React, { useContext } from 'react';
import { WishlistContext } from '../../Context/wishlistContext';
import './wishlist.scss';

const Wishlist = () => {
  const { wish, deleteWish } = useContext(WishlistContext)
  return (
    <>
      <div className="wishlistArea">
        {
          wish && wish.map(x =>
            <ul className='text_wishlist'>
              <li><img src={x.image} alt="" /></li>
              <li><h4>{x.title}</h4></li>
              <li>{x.price}</li>
              <button className='delete_btn'><li onClick={() => deleteWish(x)}>Delete</li></button>
            </ul>
          )
        }
      </div>
    </>
  )
}

export default Wishlist