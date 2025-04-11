import React, { useState } from "react";
import { restaurants } from "../dataSet/RestaurantData.js"; // Adjust path as needed

export default function SearchRestaurant() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter restaurants based on query
    const found = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    );

    // Set result to display the matching restaurant(s)
    setResult(found.length > 0 ? found : "No matching restaurant found");
  };

  return (
<div className="max-w-md mx-auto mt-0 p-4 bg-white rounded-2xl shadow-md">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search for a restaurant"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
        />
        <button
          type="submit"
          className="bg-[#800020] text-white px-4 py-2 rounded-xl hover:bg-[#a32030] transition"
        >
          Search
        </button>
      </form>

      <div className="mt-4">
        {Array.isArray(result) ? (
          result.map((restaurant) => (
            <div key={restaurant.id} className="text-center text-lg font-medium text-[#800020]">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="mt-2 text-gray-700">{restaurant.description}</p>
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="mt-4 max-w-full rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-semibold">Menu:</h3>
                <ul className="list-disc list-inside">
                  {restaurant.menu.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-[#800020]">{result}</p>
        )}
      </div>
    </div>
  );
}




