import React from 'react';
import product1 from '../assets/coturno1.png';
import product2 from '../assets/bolsa-preta-quadrada.jpg';
import product3 from '../assets/coturno2.jpg';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section id='products' className='products'>
      <div className="container">
        <div className="section-title">
          Nossos Produtos
        </div>
        <div className='products__grid'>
          <ProductCard image={product1} />
          <ProductCard image={product2} />
          <ProductCard image={product3} />
        </div>
      </div>
    </section>
  )
}

export default Products