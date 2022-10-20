import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product}) => {
    const {name,img,measurement,price,product_quantity,_id} = product
    return (
        <div className="card md:w-96 w-80  bg-base-100 shadow-lg rounded-none hover:scale-105 ease-out duration-300">
  <figure className="px-10 pt-10">
    <img src={img} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body bg-slate-300">
    <h2 className="card-title uppercase font-bold">{name}</h2>
    <div className="grid grid-cols-2 gap-4">
    <p>Price: <span className='text-xl font-bold text-amber-400'>{price}</span> Taka</p>
    <p>product: {product_quantity} pieces</p>
    <p>Measurement: {measurement} gram</p>
    </div>
    <div className="card-actions">
      <Link to={`/update/${_id}`} className="btn btn-primary bg-cyan-600 border-none hover:bg-sky-700 w-full">Update Now</Link>
    </div>
  </div>
</div>
    );
};

export default Card;