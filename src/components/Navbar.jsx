import React from 'react'
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai"; 
import { FaUserCircle } from "react-icons/fa"; 
import { MdRestaurantMenu } from "react-icons/md";
import FoodDeliveryLogo from "../assets/FoodDeliveryLogo.svg";

export default function Navbar() {
  return (
    <nav className="w-[90%] mx-auto bg-[#7A1523] h-24 py-6 rounded-full flex items-center justify-between shadow-lg">

      <div className="flex space-x-14 text-white text-lg font-medium">
        <Link to="/" className="flex items-center space-x-2 hover:underline">
          <AiFillHome className="text-2xl" />
          <span>Home</span>
        </Link>

        <Link to="/account" className="flex items-center space-x-2 hover:underline">
          <FaUserCircle className="text-2xl" />
          <span>My Account</span>
        </Link>

        <Link to="/restaurants" className="flex items-center space-x-2 hover:underline">
          <MdRestaurantMenu className="text-2xl" />
          <span>Restaurants</span>
        </Link>

        <Link to="/cart" className="flex items-center space-x-2 text-white text-2xl hover:text-gray-300">
          <RiShoppingBasketLine />
          <span className="text-lg">Cart</span>
        </Link>
      </div>

      <button className="bg-[#404380] text-white px-6 py-2 rounded-full text-lg hover:opacity-80">
        Order Now
      </button>
    </nav>
  );
}