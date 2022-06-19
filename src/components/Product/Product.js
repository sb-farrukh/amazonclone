import { ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./Product.css"

const Product = ({id, title, price, rating, image, specification, detail}) => {
    return (
      <div className='product'>
        <div className="info">
          <Link to={ `/products/${id}`} className='title' >
              <p>{title}</p>
          </Link>
          <p className="price">
              <strong>$</strong>
              <strong>{price}</strong>
          </p>
          <div className="rating">
              {Array(rating).fill().map((_, index)=> <p key={index}>⭐</p>)}
          </div>
          </div>
  
          <img src={image} alt="" />
          <button >
              <i>
                  <ShoppingCartOutlined />
              </i>
              Add To Cart
          </button>
       
      </div>
    )
  }
  
  export default Product