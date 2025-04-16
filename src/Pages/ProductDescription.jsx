import React from 'react';
import { useLocation } from 'react-router-dom';
import '../assets/Styles/ProductDescription.css'
import ProductNotFound from '../../src/assets/images/productNotFound.png'

function ProductDescription() {
  const location = useLocation();

  const { product } = location.state || {};
  if (!product) {
    return(
      <div className='product-not-found'>
        <div>
          <h1 className='product-not-found-text'>Product Not Found !</h1>
        </div>
        <div><img src={ProductNotFound} className='product-not-found-image'/></div>
      </div>
    );
  }

  return (
    <div className='p-description'>
      <div>
      <img src={product.image} className='pd-image' alt={product.name} />
      </div>
      <div>
      <h1 className='pd-name'>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      </div>
      
    </div>
  );
}

export default ProductDescription;
