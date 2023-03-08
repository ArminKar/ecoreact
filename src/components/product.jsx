import React, { useState } from 'react';
import prdctimg1 from '../images/product image 1.png';
import prdctimg2 from '../images/product image 2.jfif';
import prdctimg3 from '../images/product image 3.jfif';
import ProductContainer from './productcontainer';

function Product() {
  const [activeImg, setActiveImg] = useState(prdctimg1);

  const handleImgClick = (img) => {
    setActiveImg(img);
  };

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
          <p className="product-sub-heading">select size</p>
          <input
            type="radio"
            name="size"
            defaultValue="s"
            defaultChecked=""
            hidden=""
            id="s-size"
          />
          <label htmlFor="s-size" className="size-radio-btn check">
            s
          </label>
          <input type="radio" name="size" defaultValue="m" hidden="" id="m-size" />
          <label htmlFor="m-size" className="size-radio-btn">
            m
          </label>
          <input type="radio" name="size" defaultValue="l" hidden="" id="l-size" />
          <label htmlFor="l-size" className="size-radio-btn">
            l
          </label>
          <input
            type="radio"
            name="size"
            defaultValue="xl"
            hidden=""
            id="xl-size"
          />
          <label htmlFor="xl-size" className="size-radio-btn">
            xl
          </label>
          <input
            type="radio"
            name="size"
            defaultValue="xxl"
            hidden=""
            id="xxl-size"
          />
          <label htmlFor="xxl-size" className="size-radio-btn">
            xxl
          </label>
          <button className="btn cart-btn">add to cart</button>
          <button className="btn">add to wishlist</button>
        </div>
      </section>
      <section className="detail-des">
        <h2 className="heading">description</h2>
        <p className="des">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ......
        </p>
      </section>
      <ProductContainer />
    </div>
  );
}

export default Product;