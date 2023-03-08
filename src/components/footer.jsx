import React from 'react'
import lightlogo from '../images/light-logo.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram.png';


function Footer() {
  return (
     <div>
         <div className="footer-content">
    <img src={lightlogo} className="logo" alt="logo" />
    <div className="footer-ul-container">
      <ul className="category">
        <li className="category-title">men</li>
        <li>
          <a href="#" className="footer-link">
            t-shirts
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            sweatshirts
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            shirts
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            jeans
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            trousers
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            shoes
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            casuals
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            formals
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            sports
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            watch
          </a>
        </li>
      </ul>
      <ul className="category">
        <li className="category-title">women</li>
        <li>
          <a href="#" className="footer-link">
            t-shirts
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            sweatshirts
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            shirts
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            jeans
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            trousers
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            shoes
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            casuals
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            formals
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            sports
          </a>
        </li>
        <li>
          <a href="#" className="footer-link">
            watch
          </a>
        </li>
      </ul>
    </div>
  </div>
  <p className="footer-title">about company</p>
  <p className="info">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore
    ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero
    maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda
    alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis
    laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum
    nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut
    officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi
    distinctio tempore cupiditate praesentium nisi ut iusto, assumenda
    perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum
    eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque
    harum?
  </p>
  <p className="info">
    support emails - help@clothing.com, customersupport@clothing.com
  </p>
  <p className="info">telephone - 180 00 00 001, 180 00 00 002</p>
  <div className="footer-social-container">
    <div>
      <a href="terms" className="social-link">
        terms &amp; services
      </a>
      <a href="privacy" className="social-link">
        Privacy page
      </a>
    </div>
    <div>
      <a href="instgram.com" className="social-link">
        <img src={instagram} className="inst " alt="" />
      </a>
      <a href="facebook.com" className="social-link">
        <img src={facebook} className="fb" alt="" />
      </a>
      <a href="twitter.com" className="social-link">
        <img src={twitter} className="twit" alt="" />
      </a>
    </div>
  </div>
</div>
  );
 }

 export default Footer;