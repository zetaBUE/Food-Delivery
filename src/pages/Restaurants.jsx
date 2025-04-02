import React from 'react';
import Grey from '../assets/Grey.jpeg';
const restaurantData = [
  { name: "Restaurant 1", image: Grey },
  { name: "Restaurant 2", image: Grey },
  { name: "Restaurant 3", image: Grey },
  { name: "Restaurant 4", image: Grey },
  { name: "Restaurant 5", image: Grey },
  { name: "Restaurant 6", image: Grey }
];

const Restaurants = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0.01 gap-y-18 place-items-center">
      {restaurantData.map((restaurant, index) => (
        <div
          key={index}
          className="max-w-[300px] group rounded-2xl bg-white hover:bg-gray-800
                     hover:text-white duration-300 shadow-xl"
        >
          <div className="h-[100px]">
            <img
              src={restaurant.image}
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
  );
};

export default Restaurants;


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

