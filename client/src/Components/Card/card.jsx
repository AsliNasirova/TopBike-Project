import React, { useContext } from 'react'
import './card.scss'
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { WishlistContext } from './../../Context/wishlistContext';


const Card = ({id,image,title,price,product}) => {

  const {addWish}=useContext(WishlistContext)
  return (
    <div>
        <div className="cardArea">
            <div className="cardIcon">
            <div onClick={()=>addWish(product)}><CiHeart className='heart'/></div>
            <div><Link to={`/${id}`}><FaRegEye className='eye'/></Link></div>
            <CiShoppingBasket className='basket' />
            </div>
            <div className="imageCard">
                <img src={image} alt="" />
            </div>
            <div className="cardContent">
                <h1>{title}</h1>
                <h2>{price}</h2>
            </div>
        </div>
    </div>
  )
}

export default Card