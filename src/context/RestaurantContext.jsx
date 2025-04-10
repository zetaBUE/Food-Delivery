import React, { createContext, useState, useEffect } from "react";
import Grey from "../assets/Grey.jpeg";
import Garnell from "../assets/Garnell.png";
import { restaurants as initialRestaurants } from "../dataSet/RestaurantData";

// Create the context
export const RestaurantContext = createContext();

// Create the provider component
export const RestaurantProvider = ({ children }) => {
  // Initialize the restaurant data (preliminary data)
  const [restaurants, setRestaurants] = useState(() => {
    // Check if restaurants data exists in localStorage
    const storedRestaurants = localStorage.getItem("restaurants");
    return storedRestaurants ? JSON.parse(storedRestaurants) : initialRestaurants;
  });

  // Function to add a new restaurant
  const addRestaurant = (restaurant) => {
    const updatedRestaurants = [...restaurants, restaurant];
    setRestaurants(updatedRestaurants);

    // Save updated restaurant list to localStorage
    localStorage.setItem("restaurants", JSON.stringify(updatedRestaurants));
  };

  return (
    <RestaurantContext.Provider value={{ restaurants, addRestaurant }}>
      {children}
    </RestaurantContext.Provider>
  );
};
