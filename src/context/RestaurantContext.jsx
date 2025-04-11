import React, { createContext, useState, useEffect } from "react";
import { restaurants as initialRestaurants } from "../dataSet/RestaurantData";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  // Initialize from localStorage or use initial data
  const [restaurants, setRestaurants] = useState(() => {
    const savedRestaurants = localStorage.getItem("restaurants");
    return savedRestaurants ? JSON.parse(savedRestaurants) : initialRestaurants;
  });

  // Save to localStorage whenever restaurants change
  useEffect(() => {
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }, [restaurants]);

  const addRestaurant = (restaurant) => {
    const highestId = restaurants.reduce(
      (max, restaurant) => Math.max(max, restaurant.id),
      0
    );

    const newId = highestId + 1 > 999 ? 1 : highestId + 1;

    const newRestaurant = {
      ...restaurant,
      id: newId,
      rating: 0,
      menu: restaurant.menu || [],
    };

    setRestaurants((prevRestaurants) => [...prevRestaurants, newRestaurant]);
  };
  const removeRestaurant = (id) => {
    setRestaurants((prev) => prev.filter((restaurant) => restaurant.id !== id));
  };

  return (
    <RestaurantContext.Provider
      value={{ restaurants, addRestaurant, removeRestaurant }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
