import React from "react";
import { useLocation } from "react-router-dom";
import RestaurantHeader from "../components/restaurant/RestaurantHeader.jsx";
import MenuComponent from "../components/restaurant/MenuComponent.jsx";

const RestaurantView = () => {
  const location = useLocation();
  const { restaurant } = location.state || {};

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-10">
        <RestaurantHeader restaurant={restaurant} />
        <MenuComponent
          menu={restaurant.menu}
          restaurantName={restaurant.name}
        />
      </div>
    </div>
  );
};

export default RestaurantView;
