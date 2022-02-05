import React from 'react';

const Card = ({ 
    name, 
    price, 
    description, 
    imgs, 
    stock,
    newCollection
}) => {

let imageProduct = stock < 45 ? `/images/${imgs.imgSoldOut}`
: `/images/${imgs.imgProduct}`

let priceProduct = price < 200 ? true : false



  return (
    <div className='card-container'>
      <section className="card-container-img">
        {newCollection && (
          <span className="new">
            <img
              className="star"
              src={`images/${imgs.imgStar}`}
              alt="product"
            />
            New Collection
          </span>
        )}
        <img className="img-product " src={imageProduct} alt="" />
      </section>
      <div className="info-container">
        <h4>{name}</h4>
        <h5>
          {priceProduct && <span className='discount'>30%off</span>}$ {price}
        </h5>
        <p>{description}</p>
      </div>
    </div>
  );
};


export default Card;
