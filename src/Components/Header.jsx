import React from "react";
import "../assets/Styles/Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <div className="main-header">
          <div className="image-nav">
            <div className="logo-image-name">
              <div className="logo-img">
                <img src="../../src/assets/images/Logo.png" alt="" />
              </div>
              <h1>PC Wares</h1>
            </div>
            <div className="nav-items">
              <nav>
                <ul>
                  <Link to={'/'}>HOME</Link>
                  <Link to={'products'}>PRODUCTS</Link>
                  <Link to={'contact'}>CONTACT</Link>
                </ul>
              </nav>
            </div>
          </div>
            <button className="login-button"><PersonIcon/> Login</button>
        </div>
      </div>
    </>
  );
}

export default Header;
