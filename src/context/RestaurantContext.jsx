import React, { createContext, useState } from "react";
import Grey from "../assets/Grey.jpeg";
import Garnell from "../assets/Garnell.png";

// Create the context
export const RestaurantContext = createContext();

// Create the provider component
export const RestaurantProvider = ({ children }) => {
  // Initialize the restaurant data (preliminary data)
  const [restaurants, setRestaurants] = useState([
    { name: "Restaurant 1", image: Garnell, path: "/faq", description: "bhsbjhsbx"},
    { name: "Restaurant 2", image: Grey, path: "/add-Restaurant",description: "bhsbjhsbx" },
    { name: "Restaurant 3", image: Grey, path: "/" ,description: "bhsbjhsbx"},
    { name: "Restaurant 4", image: Grey, path: "/",description: "bhsbjhsbx" },
    { name: "Restaurant 5", image: Grey, path: "/",description: "bhsbjhsbx" },
    { name: "Restaurant 6", image: Grey, path: "/",description: "bhsbjhsbx" },
  ]);

  // Function to add a new restaurant
  const addRestaurant = (restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};

/*import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = (restaurant) => {
    setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
*/
/*import React, { createContext, useState } from "react";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};*/
