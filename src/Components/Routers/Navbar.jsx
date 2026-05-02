import React from "react";
import { Link } from "react-router-dom";
import Home from "../../Pages/Home";

const Navbar = () => {
  return (
    <div className="bg-blue-600 text-white flex items-center gap-5 justify-center p-4 text-2xl font-medium ">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
