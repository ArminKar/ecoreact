import React from 'react'
import ProductContainer from './productcontainer';
import "../css/search.css";

function Search() {
  return (
     <>
      <div>
      <section className="search-results">
        <h2 className="heading">
          search results for <span>product</span>
        </h2>
      </section>
    </div><div><ProductContainer/></div>
    </>
)};
 export default Search;