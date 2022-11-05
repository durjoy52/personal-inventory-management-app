import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({product}) => {
    const {name,img,measurement,price,product_quantity,_id,totalPrice} = product
    return (
        <div className="card md:w-96 h-full w-80  bg-base-100 shadow-lg rounded-none hover:scale-105 ease-out duration-300 ">
  <figure className="p-10">
    <img src={img} alt={name} className="rounded-xl" />
  </figure>
  <div className="card-body bg-slate-300 flex justify-center">
    <div>
    <h2 className="card-title uppercase font-bold font-mono">{name}</h2>
    <div className="grid grid-cols-2 gap-4">
    <p>Price: <span className='text-xl font-bold text-violet-800'>{price}</span> ৳</p>
    <p>product: {product_quantity}</p>
    <p>Total Price: {totalPrice} ৳</p>
    <p>Measurement: {measurement}</p>
    </div>
    </div>
  </div>
    <div className="card-actions">
      <Link to={`/update/${_id}`} className="btn btn-primary bg-cyan-600 rounded-none border-none hover:bg-sky-700 w-full">Update Now</Link>
    </div>
</div>
    );
};

export default Card;