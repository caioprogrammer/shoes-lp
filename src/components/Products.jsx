import React from 'react';
import reels1 from '../assets/videos/gliter1.mp4';
import reels2 from '../assets/videos/colors2.mp4';
import reels3 from '../assets/videos/fisher01.mp4';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <section className='products'>
      <div className="container">
        <div className="section-title">
          Our Products
        </div>
        <div className='products__grid'>
          <ProductCard video={reels1} />
          <ProductCard video={reels2} />
          <ProductCard video={reels3} />
        </div>
      </div>
    </section>
  )
}

export default Products