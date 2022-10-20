import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="pr-2 font-semibold">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="pr-2 font-semibold">
        <NavLink to="/pran">Pran Group</NavLink>
      </li>
      <li className="pr-2 font-semibold">
        <NavLink to="/sa">S.A Group</NavLink>
      </li>
      <li className="pr-2 font-semibold">
        <NavLink to="/add">Add</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-cyan-200 to-blue-300 container mx-auto rounded sticky top-0 z-10 opacity-[.95]">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
      </div>
      <div className="navbar-center md:navbar-start">
        <Link to='/' className="btn btn-ghost normal-case text-xl font-serif"><em>M/S G.M Enterprise</em></Link>
      </div>
      <div className="hidden md:flex md:flex-none navbar-end">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
