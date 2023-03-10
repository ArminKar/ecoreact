import React from 'react'
import fof from '../images/404.jpg'
import "../css/Fourofour.css";

function Fourofour() {
  return (
     <div><img src={fof} className="notfoundimg" alt="" />
     <p className="notfoundmsg">
       look like you are lost. Head to beack to our <a href="/">homepage</a>
     </p>
     </div>
  );
 }

 export default Fourofour;