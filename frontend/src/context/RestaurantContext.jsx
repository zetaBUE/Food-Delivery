import React, { createContext, useState, useEffect } from "react";
import { restaurantAPI } from "../config/api";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await restaurantAPI.getAll();
      setRestaurants(response.data);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch restaurants");
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  const addRestaurant = async (restaurantData) => {
    try {
      const response = await restaurantAPI.create(restaurantData);
      setRestaurants((prev) => [...prev, response.data]);
      setError(null);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to add restaurant");
      throw error;
    }
  };

  const updateRestaurant = async (id, restaurantData) => {
    try {
      const response = await restaurantAPI.update(id, restaurantData);
      setRestaurants((prev) =>
        prev.map((restaurant) =>
          restaurant._id === id ? response.data : restaurant
        )
      );
      setError(null);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update restaurant");
      throw error;
    }
  };

  const removeRestaurant = async (id) => {
    try {
      await restaurantAPI.delete(id);
      setRestaurants((prev) =>
        prev.filter((restaurant) => restaurant._id !== id)
      );
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to remove restaurant");
      throw error;
    }
  };

  const getRestaurantById = async (id) => {
    try {
      const response = await restaurantAPI.getById(id);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to fetch restaurant");
      throw error;
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        loading,
        error,
        addRestaurant,
        updateRestaurant,
        removeRestaurant,
        getRestaurantById,
        fetchRestaurants,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
