import React from "react";
import "../assets/Styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="intro">
        <button>Shop Now !</button>
      </div>
      <div className="product-div">
        <h2>Product Categories</h2>
        <div className="product-categories">
          <div className="product">
            <img />
            <h3>Processor</h3>
            <button>Explore</button>
          </div>
          <div className="product">
            <img />
            <h3>Processor</h3>
            <button>Explore</button>
          </div>
          <div className="product">
            <img />
            <h3>Processor</h3>
            <button>Explore</button>
          </div>
          <div className="product">
            <img />
            <h3>Processor</h3>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
