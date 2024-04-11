import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'


const Product = ({product}) => {
  return (
    <Link className='productCard'  to={product._id}>
      <img src={product.image[0].url} alt={product.name}/>
      <p>{product.name}</p>
      <span>{product.price}</span>
    </Link>
  )
}

export default Product