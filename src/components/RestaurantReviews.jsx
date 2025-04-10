// RestaurantReviews.js
import React from 'react';

const RestaurantReviews = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#7A1523] mt-10">Customer Reviews</h2>
      <div className="mt-6 space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col bg-white shadow-lg p-4 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-[#7A1523]">{review.username}</span>
              <span className="text-yellow-500">⭐ {review.rating}</span>
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantReviews;
