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

/*import React from "react";
import { Link } from "react-router-dom";
import Grey from "../assets/Grey.jpeg";
import Garnell from "../assets/Garnell.png";

const restaurantData = [
  { name: "Restaurant 1", image: Garnell, path: "/faq" },
  { name: "Restaurant 2", image: Grey, path: "/add-Restaurant" },
  { name: "Restaurant 3", image: Grey, path: "/" },
  { name: "Restaurant 4", image: Grey, path: "/" },
  { name: "Restaurant 5", image: Grey, path: "/" },
  { name: "Restaurant 6", image: Grey, path: "/" },
];

const Restaurants = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold mb-18">Pick a Restaurant</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mb-30 w-250">
          <div className="grid max-w-fit grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-30 gap-y-30 place-items-center">
            {restaurantData.map((restaurant, index) => (
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis ducimus beatae error consectetur illo asperiores
                    obcaecati magnam dolore, blanditiis facilis laboriosam
                    perferendis quia explicabo a, eius eum nesciunt deserunt.
                    Blanditiis?
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

export default Restaurants;*/

/*import React from 'react';
import Grey from '../assets/Grey.jpeg';

const restaurantData = [
  { name: "McDonald's" },
  { name: "KFC" },
  { name: "Cook Door" },
  { name: "Pizza Hut" },
  { name: "Burger King" },
  { name: "Subway" }
];

const Restaurants = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[1px] gap-y-18 place-items-center">
      {restaurantData.map((restaurant, index) => (
        <div
          key={index}
          className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-black
                     hover:text-white duration-300 shadow-xl"
        >
          <div className="h-[100px]">
            <img
              src={Grey}
              alt={restaurant.name}
              className="max-w-[200px] mx-auto block transform -translate-y-14 
                         group-hover:scale-105 group-hover:rotate-6 duration-300"
            />
          </div>

          <div className="p-4 text-center">
            <h1 className="text-xl font-bold">{restaurant.name}</h1>
            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
              --------------------------
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Restaurants;*/

/*import React from 'react'
import Grey from "../assets/Grey.jpeg";
const Restaurants = () => {
  return (
   // <h1>Pick a Restaurant</h1>
 
    <div class="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-primary 
    hover:bg-primary hover:text-white duration-300 shadow-xl">

<div class="h-[100px]">
<img src={Grey} alt="" 
     class="max-w-[200px] mx-auto block transform -translate-y-14 
            group-hover:scale-105 group-hover:rotate-6 duration-300"></img>
</div>

<div class="p-4 text-center">
<h1 class="text-xl font-bold">Restaurant name</h1>
<p class="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
    --------------------------
</p>
</div>

</div>

  )
};

export default Restaurants*/
