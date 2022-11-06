import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import DeleteConfirmModal from "./DeleteConfirmModal";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [user,loading] = useAuthState(auth)
  useEffect(()=>{
    fetch('https://enigmatic-chamber-33250.herokuapp.com/products')
    .then(res=>res.json())
    .then(data => {
        const filter = data.filter(product=> product.email === user?.email)
        if(loading){
            return <div className='bg-red-500 text-green-300 absolute top-52'><p>Loading...</p></div>
        }
        setProducts(filter)
    })
},[user,loading])


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
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="border-b-2 text-gray-600">
            <tr>
              <th></th>
              <th>Image</th>
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
                <th><div className="avatar">
    <div className="w-10 rounded">
      <img src={product.image} alt="product_img" />
    </div>
  </div></th>
                <th>{product?.name}</th>
                <th>{product?.piece}</th>
                <th>{product?.measurement}</th>
                <th>
                  <Link
                    to={`/update/${product?._id}`}
                    className="btn btn-xs btn-primary bg-cyan-100 border-none hover:bg-sky-200 text-sky-500 rounded-full"
                  >
                    Update
                  </Link>
                </th>
                <th>
                  <label onClick={()=>setDeletingProduct(product)} htmlFor="delete-modal" className="btn btn-xs hover:bg-red-200 bg-red-300 border-none rounded-full text-red-500">Delete</label>
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
