import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#7A1523]">{restaurant.name}</h3>
        <div className="flex items-center space-x-1 mt-2">
          <span className="text-yellow-500">⭐</span>
          <span className="text-[#800020]">{restaurant.rating}</span>
        </div>
        <Link
          to={`/restaurant/${restaurant.id}`} // Correct URL path
          state={{ restaurant }}  // Passing the restaurant object correctly
          className="mt-4 inline-block bg-[#7A1523] text-white py-2 px-4 rounded-full text-center hover:bg-[#800020] transition-all duration-200"
        >
          View Restaurant
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
