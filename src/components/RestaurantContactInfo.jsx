// RestaurantContactInfo.js
import React from 'react';

const RestaurantContactInfo = ({ location, contact, deliveryTime }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg mt-8">
      <h3 className="text-2xl font-semibold text-[#7A1523]">Contact & Delivery Info</h3>
      <div className="mt-4">
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Contact:</strong> {contact}</p>
        <p><strong>Delivery Time:</strong> {deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantContactInfo;
