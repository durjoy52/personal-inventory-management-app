import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const items = (
    <>
      <li className="pr-2 font-bold uppercase text-gray-600">
        <Link to="/dashboard">Profile</Link>
      </li>
      <li className="pr-2 font-bold uppercase text-gray-600">
        <Link to="/dashboard/add">Add Product</Link>
      </li>
      <li className="pr-2 font-bold uppercase text-gray-600">
        <Link to="/dashboard/manageProducts">Manage Products</Link>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-indigo-50 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {items}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
