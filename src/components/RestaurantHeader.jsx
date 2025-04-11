// RestaurantHeader.js
import React from "react";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <div className="flex items-center gap-x-5 mb-8">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-32 h-32 object-cover rounded-full"
      />
      <div>
        <h1 className="text-4xl font-bold text-[#7A1523]">{restaurant.name}</h1>
        <div className="flex items-center space-x-1 mt-2">
          <span className="text-yellow-500">⭐</span>
          <span className="text-[#800020]">{restaurant.rating}</span>
        </div>
        <p className="mt-3 text-gray-700">{restaurant.description}</p>
      </div>
    </div>
  );
};

export default RestaurantHeader;
