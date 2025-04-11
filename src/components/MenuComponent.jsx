// MenuComponent.js
import React from "react";
import { useCart } from "../context/CartContext";

const MenuComponent = ({ menu, restaurantName }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (menuItem) => {
    const itemToAdd = {
      id: `${restaurantName}-${menuItem.name}`
        .toLowerCase()
        .replace(/\s+/g, "-"),
      name: menuItem.name,
      price: parseFloat(menuItem.price.replace("$", "")),
      image: "/images/food-placeholder.jpg",
      restaurant: restaurantName,
    };
    addToCart(itemToAdd);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#7A1523] mt-10">Menu</h2>
      <div className="mt-6 space-y-4">
        {menu.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-lg text-[#800020] bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex-1">
              <span className="font-medium">{item.name}</span>
              <span className="ml-4 text-gray-600">{item.price}</span>
            </div>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-[#FFE662] text-[#800020] px-4 py-2 rounded-full hover:bg-[#FFD700] transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
