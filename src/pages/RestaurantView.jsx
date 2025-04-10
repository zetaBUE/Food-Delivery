// RestaurantView.js
import React from "react";
import { useLocation } from "react-router-dom";
import RestaurantHeader from "../components/RestaurantHeader.jsx";
import MenuComponent from "../components/MenuComponent.jsx";
import RestaurantContactInfo from "../components/RestaurantContactInfo.jsx";

const RestaurantView = () => {
  const location = useLocation();
  const { restaurant } = location.state || {}; // safely access restaurant object

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-10">
        <RestaurantHeader restaurant={restaurant} />
        <MenuComponent
          menu={restaurant.menu}
          restaurantName={restaurant.name}
        />
        <RestaurantContactInfo
          location={restaurant.location}
          contact={restaurant.contact}
          deliveryTime={restaurant.deliveryTime}
        />
      </div>
    </div>
  );
};

export default RestaurantView;
