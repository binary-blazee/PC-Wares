import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDescription() {
  const location = useLocation();

  const { product } = location.state || {};
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDescription;
