import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext"; 

const Restaurants = () => {
  const { restaurants } = useContext(RestaurantContext); 
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-18">Pick a Restaurant</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mb-30 w-250">
          <div className="grid max-w-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-30 gap-y-30 place-items-center">
            {restaurants.map((restaurant, index) => (
              <Link
                key={index}
                to={restaurant.path}
                className="w-80 h-100 group rounded-2xl text-black hover:bg-[#212121]
                          hover:text-[#E0E0E0] duration-300 shadow-xl"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="mx-auto block transform
                            group-hover:scale-105 group-hover:rotate-6 duration-300 rounded-t-lg"
                />

                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{restaurant.name}</h1>
                  <p className="text-gray-500 group-hover:text-[#E0E0E0] duration-300 text-sm">
                  {restaurant.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Restaurants;

