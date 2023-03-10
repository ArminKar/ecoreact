import React, { useState } from 'react';
import prdctimg1 from '../images/product image 1.png';
import prdctimg2 from '../images/product image 2.jfif';
import prdctimg3 from '../images/product image 3.jfif';
import ProductContainer from './productcontainer';
import "../css/product.css";

function Product() {
  const [activeImg, setActiveImg] = useState(prdctimg1);

  const handleImgClick = (img) => {
    setActiveImg(img);
  };

  function ProductDetails() {
    const [selectedSize, setSelectedSize] = useState("");

    const handleSizeSelect = (size) => {
      setSelectedSize(size);
    };

    return (
      <div>
        <p className="product-sub-heading">select size</p>
        <div className="size-options">
          <button
            className={`size-radio-btn ${selectedSize === "s" ? "checked" : ""}`}
            onClick={() => handleSizeSelect("s")}
          >
            S
          </button>
          <button
            className={`size-radio-btn ${selectedSize === "m" ? "checked" : ""}`}
            onClick={() => handleSizeSelect("m")}
          >
            M
          </button>
          <button
            className={`size-radio-btn ${selectedSize === "l" ? "checked" : ""}`}
            onClick={() => handleSizeSelect("l")}
          >
            L
          </button>
          <button
            className={`size-radio-btn ${selectedSize === "xl" ? "checked" : ""}`}
            onClick={() => handleSizeSelect("xl")}
          >
            XL
          </button>
          </div>
        <button className="btn cart-btn">add to cart</button>
        <button className="btn cart-btn">add to wishlist</button>
      </div>
    );
  }

  return (
    <div>
      <section className="product-details">
        <div className="image-slider">
          <div className="product-images">
            <img
              src={prdctimg1}
              className={activeImg === prdctimg1 ? "active" : ""}
              alt=""
              onClick={() => handleImgClick(prdctimg1)}
            />
            <img
              src={prdctimg2}
              className={activeImg === prdctimg2 ? "active" : ""}
              alt=""
              onClick={() => handleImgClick(prdctimg2)}
            />
            <img
              src={prdctimg3}
              className={activeImg === prdctimg3 ? "active" : ""}
              alt=""
              onClick={() => handleImgClick(prdctimg3)}
            />
          </div>
          <img src={activeImg} alt="" className="big-image" />
        </div>
        <div className="details">
          <h2 className="product-brand">calvin klein</h2>
          <p className="product-short-des">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <span className="product-price">$99</span>
          <span className="product-actual-price">$200</span>
          <span className="product-discount">( 50% off )</span>
          <ProductDetails />
          </div>
      </section>
      <ProductContainer />
    </div>
  );
}


export default Product;