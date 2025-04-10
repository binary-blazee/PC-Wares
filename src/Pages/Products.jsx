import React, { useState, useEffect } from 'react';
import '../assets/Styles/Product.css';
import { Link } from 'react-router-dom';
import productData from '../../src/Helpers/Products.json';
import { Outlet } from 'react-router-dom';

function Products() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCategories(productData.categories);
    setLoading(false);
    
    // fetch('../../src/Helpers/Products.json')
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setCategories(data.categories);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setLoading(false);
    //   });
    
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading products...</p>
      </div>
    );
  }



  return (
    <div>
      <div className="abc">
        <div className="galaxy"></div>
        <div id="search-container">
          <div className="nebula"></div>
          <div className="starfield"></div>
          <div className="cosmic-dust"></div>
          <div className="cosmic-dust"></div>
          <div className="cosmic-dust"></div>

          <div className="stardust"></div>

          <div className="cosmic-ring"></div>

          <div id="main">
            <input
              className="input"
              name="text"
              type="text"
              placeholder="Search the products"
            />
            <div id="input-mask"></div>
            <div id="cosmic-glow"></div>
            <div className="wormhole-border"></div>
            <div id="wormhole-icon">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="#a9c7ff"
                fill="none"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <circle r="10" cy="12" cx="12"></circle>
                <path
                  d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                ></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div id="search-icon">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                stroke="url(#cosmic-search)"
                fill="none"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <circle r="8" cy="11" cx="11"></circle>
                <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
                <defs>
                  <linearGradient gradientTransform="rotate(45)" id="cosmic-search">
                    <stop stopColor="#a9c7ff" offset="0%"></stop>
                    <stop stopColor="#6e8cff" offset="100%"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        {categories.map((category) => (
          <div key={category.id} className="category">
            <h2>{category.name}</h2>
            <div className="products">
              {category.products.map((product) => (
                <div key={product.id} className="product">
                  <img src={product.image} alt={product.name} />
                  <h3 className='product-name'>{product.name}</h3>
                  <p>${product.price}</p>
                  <div className="cartbuy">
                    <button className="CartBtn">
                      <span className="IconContainer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 576 512"
                          fill="#fff"
                          className="cart"
                        >
                          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                        </svg>
                      </span>
                      <p className="text">Add to Cart</p>
                    </button>
                    <button className="button">
                      <Link to={'/description'} state={{product}} className='link-buy'>BUY NOW</Link>
                      
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
