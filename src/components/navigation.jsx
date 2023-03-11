import React from 'react';
import lightlogo from '../images/light-logo.png';
import userlogo from '../images/user.png';
import cart from '../images/cart.png';
import { Link } from 'react-router-dom';
import "../css/nav.css";
import {menuToggle} from '../js/navigation.js'


function Navigation() {
  return (
     <div>
     <div className="nav">
       <Link to="/">
         <img src={lightlogo} className="brand-logo" alt="" />
       </Link>
       <div className="nav-items">
         <div className="search">
           <input
             type="text"
             className="search-box"
             placeholder="search brand, product"
           />
           <button href="/search" className="search-btn">
            Search
           </button>
         </div>
         <div className='nav-btns'>
         <a>
          <Link to="/login">
           <img src={userlogo} id="user-img" alt="userlogo" className='menu-toggle'/>
           </Link>
         </a>
         <Link to="/product">
           <img src={cart} alt="productcart" className='menu-toggle'/>
         </Link>
         <button className='menu-toggle' onClick={menuToggle}>☰</button>
         </div>
       </div>
     </div>
     <ul className="links-container">
       <li className="link-item">
         <a href="#" className="links">
           home
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="links">
           women
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="links">
           men
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="links">
           kids
         </a>
       </li>
       <li className="link-item">
         <a href="#" className="links">
           accessories
         </a>
       </li>
     </ul>
    </div>
  )
 }


export default Navigation;