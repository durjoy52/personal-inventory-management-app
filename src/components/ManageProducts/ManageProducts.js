import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deletingProduct, setDeletingProduct] = useState(null);

  useEffect(() => {
    fetch("https://enigmatic-chamber-33250.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);


  const handleDelete = (id) =>{
    fetch(`https://enigmatic-chamber-33250.herokuapp.com/product/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount > 0){
            toast.success("product has been deleted")
            setDeletingProduct(null)
            const remaining = products.filter(product=> product._id !== id)
            setProducts(remaining)
        }
    })
  }

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Measurement</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{product?.name}</th>
                <th>{product?.product_quantity}</th>
                <th>{product?.measurement}</th>
                <th>
                  <Link
                    to={`/update/${product?._id}`}
                    className="btn btn-xs btn-primary bg-cyan-600 border-none hover:bg-sky-700"
                  >
                    Update
                  </Link>
                </th>
                <th>
                  <label onClick={()=>setDeletingProduct(product)} htmlFor="delete-modal" className="btn btn-xs btn-error border-none text-white">Delete</label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
 {
    deletingProduct && <DeleteConfirmModal handleDelete={handleDelete} deletingProduct={deletingProduct} />
 }
    </div>
  );
};

export default ManageProducts;
