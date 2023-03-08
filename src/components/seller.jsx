import React from 'react'
import noprdct from '../images/no-products.png';

function Seller() {
  return (
     <div>
  <div className="become-seller">
    <p className="heading">become a seller</p>
    <p className="des">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam soluta
      aperiam illum perferendis ipsum esse ducimus.{" "}
    </p>
    <button className="btn" id="apply-btn">
      apply for seller account
    </button>
  </div>
  <div className="apply-form hide">
    <input
      type="text"
      id="business-name"
      placeholder="business-name / company name / shop name"
    />
    <textarea id="business-add" placeholder="address" defaultValue={""} />
    <textarea id="about" placeholder="about" defaultValue={""} />
    <input type="text" id="number" placeholder="number" />
    <br />
    <input
      type="checkbox"
      defaultChecked=""
      className="checkbox"
      id="terms-and-cond"
    />
    <label htmlFor="terms-and-cond">
      agree to our <a href="">terms and conditions</a>
    </label>
    <br />
    <input type="checkbox" className="checkbox" id="legitInfo" />
    <label htmlFor="legitInfo">all information is legit</label>
    <button className="submit-btn" id="apply-form-btn">
      apply
    </button>
  </div>
  <div className="product-listing hide">
    <div className="add-product">
      <p className="add-product-title">add product</p>
      <button className="btn">add product</button>
    </div>
    <img src={noprdct} className="no-product-image" alt="" />
  </div>
</div>
  );
 }

 export default Seller;