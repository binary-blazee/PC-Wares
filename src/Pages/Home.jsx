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
            <img src="https://media.istockphoto.com/id/1425155625/vector/circuit-board-technology-background-central-computer-processors-cpu-concept-motherboard.jpg?s=612x612&w=0&k=20&c=b1STvCd1IuFMHdlAmVbb7HON82jTXuSSHKJqXHWR0Cw=" />
            <h3>Processor</h3>
            <button className="explore-btn">Explore</button>
          </div>
          <div className="product">
            <img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/12/best-gpu-for-4k-gaming.jpg" />
            <h3>Graphic Cards</h3>
            <button className="explore-btn">Explore</button>
          </div>
          <div className="product">
            <img src="https://computercity.com/wp-content/uploads/asus-z790-dark-hero-lga1700-motherboard.webp" />
            <h3>Mother Boards</h3>
            <button className="explore-btn">Explore</button>
          </div>
          <div className="product">
            <img src="https://t3.ftcdn.net/jpg/02/34/32/70/360_F_234327002_DwU2bGPJioLo5khsEfzDoXROoYEg7dqA.jpg" />
            <h3>Storage</h3>
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
