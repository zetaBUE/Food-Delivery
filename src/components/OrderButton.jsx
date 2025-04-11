import React from "react";
import { Link } from "react-router-dom";

export default function OrderButton() {
  return (
    <Link to="/restaurants">
      <button className="bg-[#FFE662] text-nowrap text-black ease-out px-5 py-2 mr-3 rounded-full hover:scale-110 transition-all duration-200">
        Order Now
      </button>
    </Link>
  );
}
