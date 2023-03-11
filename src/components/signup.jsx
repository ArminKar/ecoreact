import React from 'react'
import lightlogo from '../images/light-logo.png';
import "../css/signup.css";

function Signup() {
  return (
     <div>
        <div className="container-signup">
  <img src={lightlogo} className="logo" alt="" />
  <div>
    <input type="text" autoComplete="off" id="name" placeholder="name" className='signupname'/>
    <input type="email" autoComplete="off" id="email" placeholder="email" className='signupemail'/>
    <input type="password" autoComplete="off" id="password" placeholder="password" className='signuppassword'/>
    <input type="text" autoComplete="off" id="number" placeholder="number" className='signupnumber'/>
    <input type="checkbox" defaultChecked="" className="checkbox" id="terms-and-cond" />
    <label htmlFor="terms-and-cond">agree to our <a href="">terms and conditions</a></label>
    <br />
    <input type="checkbox" className="checkbox" id="notification" />
    <label htmlFor="notification">
      recieve upcoming offers and events mails
    </label>
    <button className="submit-btn">create account</button>
  </div>
  <a href="/login" className="login-link">
    already have an account? Log in here
  </a>
</div>
</div>
  );
 }

 export default Signup;