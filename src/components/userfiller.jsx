import React from 'react'
import camera from '../images/camera.png';

function userfiller() {
  return (
     <div>
       <div className="form">
  <input type="text" id="product-name" placeholder="product name" />
  <input
    type="text"
    id="short-des"
    placeholder="short line about the product"
  />
  <textarea id="des" placeholder="detail description" defaultValue={""} />
  <div className="product-info">
    <div className="product-image">
      <p className="text">product image</p>
    </div>
    <div className="upload-image-sec">
      <p className="text">
        <img src={camera.png} alt="" />
        upload image
      </p>
      <div className="upload-catalouge">
        <input
          type="file"
          className="fileupload"
          id="first-file-upload-btn"
          hidden=""
        />
        <label htmlFor="first-file-upload-btn" className="upload-image" />
        <input
          type="file"
          className="fileupload"
          id="second-file-upload-btn"
          hidden=""
        />
        <label htmlFor="second-file-upload-btn" className="upload-image" />
        <input
          type="file"
          className="fileupload"
          id="third-file-upload-btn"
          hidden=""
        />
        <label htmlFor="third-file-upload-btn" className="upload-image" />
        <input
          type="file"
          className="fileupload"
          id="fourth-file-upload-btn"
          hidden=""
        />
        <label htmlFor="fourth-file-upload-btn" className="upload-image" />
      </div>
    </div>
    <div className="select-sizes">
      <p className="text">size available</p>
      <div className="sizes">
        <input
          type="checkbox"
          className="size-checkbox"
          id="xs"
          defaultValue="xs"
        />
        <input
          type="checkbox"
          className="size-checkbox"
          id="s"
          defaultValue="s"
        />
        <input
          type="checkbox"
          className="size-checkbox"
          id="m"
          defaultValue="m"
        />
        <input
          type="checkbox"
          className="size-checkbox"
          id="l"
          defaultValue="l"
        />
        <input
          type="checkbox"
          className="size-checkbox"
          id="xl"
          defaultValue="xl"
        />
        <input
          type="checkbox"
          className="size-checkbox"
          id="xxl"
          defaultValue="xxl"
        />
        <input
          type="checkbox"
          className="size-checkbox"
          id="xxxl"
          defaultValue="xxxl"
        />
      </div>
    </div>
  </div>
  <div className="product-price">
    <input type="number" id="actual-price" placeholder="actual price" />
    <input type="number" id="discount" placeholder="discount percentage" />
    <input type="number" id="sell-price" placeholder="selling price" />
  </div>
  <input type="number" id="stock" min={5} placeholder="how many items" />
  <textarea
    id="tags"
    placeholder="Which category would you describe your item"
    defaultValue={""}
  />
  <input type="checkbox" className="checkbox" id="tac" defaultChecked="" />
  <label htmlFor="tac">We take 50% off all profits</label>
  <div className="buttons">
    <button className="btn" id="add-btn">
      add product
    </button>
    <button className="btn" id="save-btn">
      save draft
    </button>
  </div>
</div>
</div>
  );
 }

 export default userfiller;