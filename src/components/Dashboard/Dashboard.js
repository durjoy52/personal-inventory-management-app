import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const items = <>
    
    <li className="pr-2 font-bold uppercase text-gray-600">
        <Link to="/dashboard/add">Add Product</Link>
      </li>
      <li className="pr-2 font-bold uppercase text-gray-600">
        <Link to="/dashboard/manageProducts">Manage Products</Link>
      </li>
    </>
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* <!-- Page content here --> */}
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-indigo-50 text-base-content">
      {/* <!-- Sidebar content here --> */}
      {
        items
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;