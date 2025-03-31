import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#7A1523] p-4 h-20 rounded-full flex items-center justify-between shadow-lg">
      {/* Logo */}
      <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center">
        {/* Replace with actual logo image */}
        <span className="text-black font-bold">Logo</span>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-between w-auto text-white text-lg">
        <Link to="/" className="hover:underline"> Home </Link>
        <Link to="/account" className="hover:underline"> Account </Link>
        <Link to="/restaurants" className="hover:underline"> Restaurants </Link>
        <Link to="/cart" className="hover:underline"> Cart </Link>
      </div>

      {/* Order Now Button */}
      <button className="bg-[#0F0C2C] text-white px-6 py-2 rounded-full text-lg shadow-md hover:opacity-80">
        Order Now
      </button>
    </nav>
  );
}