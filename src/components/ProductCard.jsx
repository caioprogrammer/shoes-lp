import React from 'react'
import Button from './Button';
import CartIcon from '../assets/cart-icon.svg'

const ProductCard = (props) => {
  return (
    <div className="card">
      <video className='product__video' muted autoPlay loop >
        <source src={props.video} type="video/mp4"/>
      </video>
      <p className='card-name'>Nome do Produto</p>
      <div className="card-data">
        <div className="value">R$ 500</div>
        <Button buttonImage={CartIcon} buttonLink="#" />
      </div>
    </div>
  )
}

export default ProductCard