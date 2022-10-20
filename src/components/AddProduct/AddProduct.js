import React from "react";

const AddProduct = () => {
  return (
    <div className="container mx-auto mt-5 h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="card card-normal w-80 md:w-96 bg-base-100 shadow-xl">
          <div className="card-body bg-stone-200">
            <form className="grid gap-4">
              <h2 className="card-title uppercase">Add product</h2>
              <div className="form-control">
                <div className="input-group">
                  <select className="select select-bordered">
                    <option disabled defaultValue>
                      Pick category
                    </option>
                    <option>S.A GROUP</option>
                    <option>PRAN GROUP</option>
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
              <button className="btn btn-accent border-none font-bold">Button</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
