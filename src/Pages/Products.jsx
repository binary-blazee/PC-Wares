import React, { useState, useEffect } from 'react';
import '../assets/Styles/Product.css';

function Products() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('../../src/Helpers/Products.json') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
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
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
<div className='cartbuy'><button class="CartBtn">
  <span class="IconContainer"> 
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#fff" class="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
  </span>
  <p class="text">Add to Cart</p>
</button>
<button class="button">
  BUY NOW
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_30_96)">
      <path
        fill="white"
        d="M0.479167 11.5C0.203024 11.5 -0.0208333 11.7239 -0.0208333 12C-0.0208333 12.2761 0.203024 12.5 0.479167 12.5V11.5ZM22.9231 12.3536C23.1184 12.1583 23.1184 11.8417 22.9231 11.6464L19.7411 8.46447C19.5459 8.2692 19.2293 8.2692 19.034 8.46447C18.8388 8.65973 18.8388 8.97631 19.034 9.17157L21.8625 12L19.034 14.8284C18.8388 15.0237 18.8388 15.3403 19.034 15.5355C19.2293 15.7308 19.5459 15.7308 19.7411 15.5355L22.9231 12.3536ZM0.479167 12.5H22.5696V11.5H0.479167V12.5Z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_30_96">
        <rect fill="white" height="24" width="24"></rect>
      </clipPath>
    </defs>
  </svg>
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
