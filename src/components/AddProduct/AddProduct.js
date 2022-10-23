import React from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const addProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const price = event.target.price.value;
    const product_quantity = event.target.piece.value;
    const measurement = event.target.measurement.value;
    const img = event.target.img.value;
    const group = event.target.group.value;
    const product = {name,price,product_quantity,measurement,group,img}
    fetch('http://localhost:5000/product',{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data?.insertedId){
        toast.success("successfully product added")
      }else{
        toast.error("failed to add product")
      }
      event.target.reset()
    })
  };

  return (
    <div className="container mx-auto mt-5 h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="card card-normal w-80 md:w-96 bg-base-100 shadow-xl">
          <div className="card-body bg-stone-200">
            <form onSubmit={addProduct} className="grid gap-4">
              <h2 className="card-title uppercase">Add product</h2>
              <div className="form-control">
                <div className="input-group">
                  <select name="group" className="select select-bordered">
                    <option disabled defaultValue>
                       Select Group
                    </option>
                    <option value="pran">POWER GROUP</option>
                    <option value="sa">MUSKAN GROUP</option>
                  </select>
                </div>
              </div>
              <input
                type="text"
                name="name"
                placeholder="product name"
                className="input border-none input-accent w-full max-w-xs"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="price"
                className="input border-none input-accent w-full max-w-xs"
                required
              />
              <input
                type="number"
                name="piece"
                placeholder="piece"
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
              <input
                type="text"
                name="img"
                placeholder="image link"
                className="input border-none input-accent w-full max-w-xs"
                required
              />
              <button className="btn btn-accent border-none font-bold">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
