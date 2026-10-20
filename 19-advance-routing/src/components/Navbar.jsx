import React from "react";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-cyan-800">
      <h2 className="text-3xl font-bold  text-yellow-300">Jaswant Kumar</h2>
      <div className="flex gap-8 font-bold">
  <Link to="/" className="inline-block transition duration-300 hover:text-yellow-300 hover:scale-105">
    Home
  </Link>

  <Link to="/about" className="inline-block transition duration-300 hover:text-yellow-300 hover:scale-105">
    About
  </Link>

  <Link to="/courses" className="inline-block transition duration-300 hover:text-yellow-300 hover:scale-105">
    Courses
  </Link>
   <Link to="/product" className="inline-block transition duration-300 hover:text-yellow-300 hover:scale-105">
    Product
  </Link>
</div>
    </div>
  );
};

export default Navbar;
