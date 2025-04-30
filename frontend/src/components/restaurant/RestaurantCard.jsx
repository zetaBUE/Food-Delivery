import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      state={{ restaurant }}
      className="w-80 h-100 group rounded-2xl text-black hover:bg-[#212121]
                          hover:text-[#E0E0E0] duration-300 shadow-xl"
    >
      <div className="h-48 overflow-hidden rounded-t-2xl">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover transform
                              group-hover:scale-105 group-hover:rotate-6 duration-300"
        />
      </div>

      <div className="p-4 text-center">
        <h1 className="text-xl font-bold">{restaurant.name}</h1>
        <p className="text-gray-500 group-hover:text-[#E0E0E0] duration-300 text-sm line-clamp-3">
          {restaurant.description}
        </p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
