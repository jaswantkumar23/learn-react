import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 py-4 font-bold">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
        <Link to="/Product/kids">Kids</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
