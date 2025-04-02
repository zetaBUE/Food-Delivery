import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import FoodDeliveryLogo from "../assets/FoodDeliveryLogo.svg";

export default function Navbar() {
  return (
    <nav className="w-[80%] min-w-2 max-w-4xl mx-auto my-10 bg-[#7A1523] h-15 py-6 rounded-full flex items-center justify-end gap-x-5 shadow-lg text-white/40">
      <Link to="/" className="flex items-center justify-start mr-auto ml-5">
        <img src={FoodDeliveryLogo} alt="Food Delivery Logo" className="w-25" />
      </Link>

      <Link
        to="/"
        className="flex items-center hover:text-white transition-all duration-200 space-x-1"
      >
        <span>Home</span>
      </Link>

      <Link
        to="/account"
        className="flex items-center hover:text-white transition-all duration-200 space-x-1"
      >
        <span>My Account</span>
      </Link>

      <Link
        to="/restaurants"
        className="flex items-center hover:text-white transition-all duration-200 space-x-1"
      >
        <span>Restaurants</span>
      </Link>

      <Link
        to="/cart"
        className="flex items-center hover:text-white transition-all duration-200 space-x-1"
      >
        <span>Cart</span>
      </Link>
      <Link to="/checkout">
        <button className="bg-[#101035] text-nowrap text-white ease-out px-5 py-2 mr-3 rounded-full hover:scale-110 transition-all duration-200">
          Order Now
        </button>
      </Link>
    </nav>
  );
}
