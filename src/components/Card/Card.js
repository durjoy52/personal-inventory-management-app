import React from 'react';

const Card = ({product}) => {
    const {name,img,measurement,price,product_quantity} = product
    return (
        <div className="card md:w-96 w-80  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Price:{price}</p>
    <p>product:{product_quantity} pieces</p>
    <p>measurement:{measurement} gram</p>
    <div className="card-actions">
      <button className="btn btn-primary">Update Now</button>
    </div>
  </div>
</div>
    );
};

export default Card;