import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  return (
    <div className="container mx-auto mt-5 h-screen">
      <div className="flex justify-center items-center h-full">
      <div className="card card-normal w-80 lg:w-1/2 lg:card-side bg-base-100 shadow-xl">
  <figure><img className="w-96" src={product?.img} alt="Album"/></figure>
  <div className="card-body bg-stone-200">
    <h2 className="card-title">{product?.name}</h2>
    <p>Group: {product?.group}</p>
    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
    <button className="btn btn-accent font-bold">Button</button>
  </div>
</div>
      </div>
    </div>
  );
};

export default UpdateProduct;
