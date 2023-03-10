import React from "react";
import ReactDOM from "react-dom";
import "./css/ProductContainer.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Login,
  Product,
  Search,
  Seller,
  Signup,
  Userfiller,
  Fourofour,

} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Userfiller" element={<Userfiller />} />
      <Route path="/Fourofour" element={<Fourofour />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Seller" element={<Seller />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

