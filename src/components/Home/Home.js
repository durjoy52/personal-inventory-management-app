import React from 'react';
import { Link } from 'react-router-dom';
import home from "../../assets/home.jpg";
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen translate-y-[-9%]" style={{ backgroundImage: `url(${home})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Manage Your Inventory</p>
      <Link to='/login' className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;