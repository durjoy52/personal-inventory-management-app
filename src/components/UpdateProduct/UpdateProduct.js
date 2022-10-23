import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
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

  const updateProduct = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const product_quantity = e.target.pieces.value;
    const measurement = e.target.measurement.value;

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ price, product_quantity, measurement }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          toast.success("product successfully updated", { id: "update" });
        } else {
          toast.error("update failed", { id: "error" });
        }
      });
    e.target.reset();
  };

  return (
    <div className="container mx-auto mt-5 h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="card card-normal w-80 lg:w-1/2 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-80 lg:w-96" src={product?.img} alt="Album" />
          </figure>
          <div className="card-body bg-stone-200">
            <form onSubmit={updateProduct} className="grid gap-4">
              <h2 className="card-title uppercase">{product?.name}</h2>
              <p className="uppercase">Group: {product?.group}</p>
              <input
                type="number"
                name="price"
                placeholder="price"
                className="input border-none input-accent w-full max-w-xs"
                required
              />
              <input
                type="number"
                name="pieces"
                placeholder="pieces"
                className="input border-none input-accent w-full max-w-xs"
                required
              />
              <input
                type="number"
                name="measurement"
                placeholder="measurement"
                className="input border-none input-accent w-full max-w-xs"
                required
              />
              <button className="btn btn-accent font-bold">Button</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
