import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { auth } from "../../firebase.init";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [user] = useAuthState(auth);
  const imageStorageKey = "fe3c8e10c4f3fdca869534547adc0775";

  const addProduct = async (data) => {
    data.email = user?.email;
    const image = data?.image[0];
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    const formData = new FormData();
    formData.append("image", image);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          data.image = img;
          data.totalPrice = data.price * data.piece;
           fetch("https://enigmatic-chamber-33250.herokuapp.com/product", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.insertedId) {
          toast.success("successfully product added");
          reset();
        } else {
          toast.error("failed to add product");
        }
      });
        }
      });
    console.log(data);
    
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="card card-normal w-80 md:w-96 bg-base-100 shadow-xl">
        <div className="card-body bg-stone-200">
          <form onSubmit={handleSubmit(addProduct)} className="grid gap-4">
            <h2 className="card-title uppercase">Add product</h2>
            <div className="form-control">
              <div className="input-group">
                <select
                  className="select select-accent  max-w-xs"
                  {...register("group")}
                >
                  <option value="power">Power Group</option>
                  <option value="muskan">Muskan Group</option>
                </select>
              </div>
            </div>
            <input
              placeholder="Product Name"
              className="input border-none input-accent max-w-xs"
              {...register("name", { required: "name is required" })}
            />
            <p className="text-error">{errors.name?.message}</p>
            <input
              className="input border-none input-accent max-w-xs"
              type="number"
              placeholder="Price"
              {...register("price", { required: "price is required" })}
            />
            <p className="text-error">{errors.price?.message}</p>
            <input
              type="number"
              placeholder="Product Piece"
              className="input border-none input-accent w-full max-w-xs"
              {...register("piece", { required: "product piece is required" })}
            />
            <p className="text-error">{errors.piece?.message}</p>
            <input
              type="text"
              placeholder="Measurement"
              className="input border-none input-accent w-full max-w-xs"
              {...register("measurement", {
                required: "measurement is required",
              })}
            />
            <p className="text-error">{errors.measurement?.message}</p>
            <input
              type="file"
              placeholder="image"
              className="input border-none input-accent w-full max-w-xs"
              {...register("image", { required: "Image is required" })}
            />
            <p className="text-error">{errors.image?.message}</p>
            <button className="btn btn-primary bg-indigo-500 border-none font-bold">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
