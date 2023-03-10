import React from 'react'
import lightlogo from '../images/light-logo.png';
import womencollect from '../images/women-collection.jpg';
import mencollect from '../images/men-collection.jpg';
import accesoriescollect from '../images/accessories-collection.jpeg';
import ProductContainer from './productcontainer';
import "../css/home.css";

function Home() {
  return (
<div>
<header className="hero-section">
    <div className="content">
      <img src={lightlogo} className="logo-hero" alt="" />
      <p className="sub-heading">DARK - ARTS - FASHION</p>
    </div>
  </header>
  <section className="product">
    <h2 className="product-category">My Collection</h2>
    <div><ProductContainer/>
    </div>
    
  </section>
  <section className="collection-container">
    <a href="#" className="collection">
      <img src={womencollect} alt="" />
      <p className="collection-title">
        women <br /> apparels
      </p>
    </a>
    <a href="#" className="collection">
      <img src={mencollect} alt="" />
      <p className="collection-title">
        men <br /> apparels
      </p>
    </a>
    <a href="#" className="collection">
      <img src={accesoriescollect} alt="" />
      <p className="collection-title">accessories</p>
    </a>
  </section>
</div>
  );
}

export default Home;