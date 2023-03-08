import React from 'react';
import lightlogo from '../images/light-logo.png';
import userlogo from '../images/user.png';
import cart from '../images/cart.png';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
     <div>
     <div className="nav">
       <a href="/">
         <img src={lightlogo} className="brand-logo" alt="" />
       </a>
       <div className="nav-items">
         <div className="search">
           <input
             type="text"
             className="search-box"
             placeholder="search brand, product"
           /><Link to="/search">
           <button className="search-btn">
             search
           </button>
           </Link>
         </div>
         <a>
          <Link to="/login">
           <img src={userlogo} id="user-img" alt="" />
           </Link>
           <div className="login-logout-popup hide">
             <p className="account-info" />
             <button className="btn" id="user-btn">
               Log out
             </button>
           </div>
         </a>
         <Link to="/product">
           <img src={cart} alt="" />
         </Link>
       </div>
     </div>
     <ul className="links-container">
       <li className="link-item">
         <a href="#" className="link">
           home
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="link">
           women
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="link">
           men
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="link">
           kids
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="link">
           accessories
         </a>
       </li>
     </ul>
    </div>
  )
 }

export default Navigation;