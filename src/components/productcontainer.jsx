import React from 'react';
import Slider from 'react-slick';
import card1 from '../images/card1.jfif';
import card2 from '../images/card2.jfif';
import card3 from '../images/card3.png';
import card4 from '../images/card4.png';
import card5 from '../images/card5.jfif';
import card6 from '../images/card6.png';
import card7 from '../images/card7.jfif';
import card8 from '../images/card8.jfif';

const ProductContainer = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99, image: card1 },
    { id: 2, name: 'Product 2', price: 20.99, image: card2 },
    { id: 3, name: 'Product 3', price: 30.99, image: card3 },
    { id: 4, name: 'Product 4', price: 40.99, image: card4 },
    { id: 5, name: 'Product 5', price: 50.99, image: card5 },
    { id: 6, name: 'Product 6', price: 60.99, image: card6 },
    { id: 7, name: 'Product 7', price: 70.99, image: card7 },
    { id: 8, name: 'Product 8', price: 80.99, image: card8 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ProductCard = ({ product }) => (
    <div className="ProductCard">
        <div className="Product_images">
      <img src={product.image} alt={product.name} />
      </div>
      <div className="ProductInfo">
      <h3 className="ProductName">{product.name}</h3>
      <p className="ProductPrice">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );

  return (
    <div className="ProductSlider">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductContainer;