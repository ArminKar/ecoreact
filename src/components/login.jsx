import React from 'react'
import lightlogo from '../images/light-logo.png';
import "../css/signup.css";

function Login() {
  return (
     <div>
        <div className="container-login">
  <img src={lightlogo} className="logo" alt="" />
  <div>
    <input type="email" autoComplete="off" id="email" placeholder="email" className='loginemail' />
    <input type="password" autoComplete="off" id="password" placeholder="password" className="loginpassword" />
    <button className="submit-btn">login</button>
  </div>
  <a href="/signup" className="link">
    don't have account? Create one
  </a>
</div>
</div>
  );
 }

 export default Login;