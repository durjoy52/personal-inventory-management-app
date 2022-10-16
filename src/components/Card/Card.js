import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product}) => {
    const {name,img,measurement,price,product_quantity,_id} = product
    return (
        <div className="card md:w-96 w-80  bg-base-100 shadow rounded-none">
  <figure className="px-10 pt-10">
    <img src={img} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Price:{price} Taka</p>
    <p>product: {product_quantity} pieces</p>
    <p>measurement: {measurement} gram</p>
    <div className="card-actions">
      <Link to={`/update/${_id}`} className="btn btn-primary bg-cyan-600 border-none hover:bg-sky-700">Update Now</Link>
    </div>
  </div>
</div>
    );
};

export default Card;