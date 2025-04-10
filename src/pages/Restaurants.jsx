// src/pages/Restaurants.js
import React from "react";
import RestaurantCard from "../components/RestaurantCard";
// Import the restaurants data
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image: "/images/pizza-palace.jpg",
    rating: 4.5,
    description:
      "The best pizza in town, freshly made with high-quality ingredients.",
    cuisine: "Italian",
    deliveryTime: "30-40 min",
    location: "123 Pizza St, Pizzaville",
    contact: "+1 555-123-4567",
    menu: [
      { name: "Margherita Pizza", price: "$10" },
      { name: "Pepperoni Pizza", price: "$12" },
      { name: "Pasta Alfredo", price: "$15" },
    ],
    specialOffer: "20% off on your first order",
    reviews: [
      {
        username: "John Doe",
        rating: 5,
        comment: "Amazing pizza! Highly recommend.",
      },
      {
        username: "Jane Smith",
        rating: 4,
        comment: "Great taste, but a bit too cheesy for my liking.",
      },
    ],
  },
  {
    id: 2,
    name: "Sushi Heaven",
    image: "/images/sushi-heaven.jpg",
    rating: 4.8,
    description:
      "Authentic Japanese sushi with the finest selection of seafood.",
    cuisine: "Japanese",
    deliveryTime: "20-30 min",
    location: "456 Sushi Rd, Sushi City",
    contact: "+1 555-987-6543",
    menu: [
      { name: "Sushi Roll", price: "$18" },
      { name: "Sashimi Plate", price: "$20" },
      { name: "Miso Soup", price: "$5" },
    ],
    specialOffer: "Free Miso Soup with every Sashimi Plate!",
    reviews: [
      {
        username: "Emily Johnson",
        rating: 5,
        comment: "Best sushi I've ever had!",
      },
      {
        username: "Tom White",
        rating: 4.5,
        comment: "Fresh ingredients and great flavor.",
      },
    ],
  },
  {
    id: 3,
    name: "Burger King",
    image: "/images/burger-king.jpg",
    rating: 4.2,
    description: "Juicy burgers and crispy fries – the ultimate comfort food.",
    cuisine: "American",
    deliveryTime: "30-45 min",
    location: "789 Burger Blvd, Burger Town",
    contact: "+1 555-666-7777",
    menu: [
      { name: "Cheeseburger", price: "$8" },
      { name: "Whopper", price: "$10" },
      { name: "French Fries", price: "$3" },
    ],
    specialOffer: "Get a free drink with any meal combo.",
    reviews: [
      {
        username: "Chris Brown",
        rating: 4,
        comment: "Burgers are good, but a bit greasy.",
      },
      {
        username: "Maya Lee",
        rating: 4.5,
        comment: "Great burger, but could use more toppings.",
      },
    ],
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "/images/taco-fiesta.jpg",
    rating: 4.7,
    description:
      "Tacos, burritos, and quesadillas with all the flavors of Mexico.",
    cuisine: "Mexican",
    deliveryTime: "25-35 min",
    location: "321 Taco Lane, Fiesta City",
    contact: "+1 555-765-4321",
    menu: [
      { name: "Beef Taco", price: "$6" },
      { name: "Chicken Burrito", price: "$9" },
      { name: "Cheese Quesadilla", price: "$7" },
    ],
    specialOffer: "Buy one burrito, get one taco free!",
    reviews: [
      {
        username: "Carlos Mendoza",
        rating: 5,
        comment: "Tacos are amazing, so fresh!",
      },
      {
        username: "Sophia Martinez",
        rating: 4.5,
        comment: "Love the burritos, but could use more spice.",
      },
    ],
  },
  {
    id: 5,
    name: "Pasta Perfection",
    image: "/images/pasta-perfection.jpg",
    rating: 4.9,
    description:
      "Delicious homemade pasta dishes crafted with love and passion.",
    cuisine: "Italian",
    deliveryTime: "35-45 min",
    location: "123 Pasta Ave, Noodle Town",
    contact: "+1 555-234-5678",
    menu: [
      { name: "Spaghetti Carbonara", price: "$12" },
      { name: "Lasagna", price: "$14" },
      { name: "Fettuccine Alfredo", price: "$13" },
    ],
    specialOffer: "10% off all pasta dishes on weekends.",
    reviews: [
      {
        username: "Olivia Green",
        rating: 5,
        comment: "The best pasta I’ve ever had!",
      },
      {
        username: "Lucas Scott",
        rating: 4.5,
        comment: "Great sauce, but the pasta could be a little softer.",
      },
    ],
  },
  {
    id: 6,
    name: "Biryani Palace",
    image: "/images/biryani-palace.jpg",
    rating: 4.6,
    description: "Spicy, aromatic biryanis and flavorful Indian cuisine.",
    cuisine: "Indian",
    deliveryTime: "40-50 min",
    location: "222 Spice St, Curry City",
    contact: "+1 555-876-5432",
    menu: [
      { name: "Chicken Biryani", price: "$15" },
      { name: "Paneer Tikka", price: "$10" },
      { name: "Mutton Curry", price: "$18" },
    ],
    specialOffer: "Free naan with every biryani order!",
    reviews: [
      {
        username: "Ravi Kumar",
        rating: 5,
        comment: "The best biryani in town, hands down!",
      },
      {
        username: "Anjali Patel",
        rating: 4,
        comment: "A bit too spicy for my taste, but really flavorful.",
      },
    ],
  },
  {
    id: 7,
    name: "Vegan Vibes",
    image: "/images/vegan-vibes.jpg",
    rating: 4.4,
    description:
      "A plant-based dining experience with fresh ingredients and great flavors.",
    cuisine: "Vegan",
    deliveryTime: "30-40 min",
    location: "678 Green Rd, Plant City",
    contact: "+1 555-444-3333",
    menu: [
      { name: "Vegan Burger", price: "$11" },
      { name: "Quinoa Salad", price: "$9" },
      { name: "Vegan Pizza", price: "$13" },
    ],
    specialOffer: "Get 15% off your first vegan meal!",
    reviews: [
      {
        username: "Charlotte Gray",
        rating: 4.5,
        comment: "Tasty and healthy, highly recommend the burger!",
      },
      {
        username: "Daniel White",
        rating: 4,
        comment: "Good vegan food, but a bit on the pricey side.",
      },
    ],
  },
  {
    id: 8,
    name: "Dim Sum Delight",
    image: "/images/dim-sum-delight.jpg",
    rating: 4.8,
    description: "Authentic Chinese dim sum and delicious small plates.",
    cuisine: "Chinese",
    deliveryTime: "25-35 min",
    location: "345 Dumpling St, Chinatown",
    contact: "+1 555-123-9876",
    menu: [
      { name: "Pork Dumplings", price: "$8" },
      { name: "Shrimp Spring Rolls", price: "$7" },
      { name: "Dim Sum Assortment", price: "$15" },
    ],
    specialOffer: "Free dipping sauce with every order of dim sum.",
    reviews: [
      {
        username: "Ming Chen",
        rating: 5,
        comment: "Best dim sum in the city!",
      },
      {
        username: "Li Wei",
        rating: 4.5,
        comment:
          "Love the pork dumplings, but the shrimp rolls were too crispy.",
      },
    ],
  },
  {
    id: 9,
    name: "Steakhouse Supreme",
    image: "/images/steakhouse-supreme.jpg",
    rating: 4.9,
    description:
      "Premium steaks and exceptional cuts of meat grilled to perfection.",
    cuisine: "Steakhouse",
    deliveryTime: "40-50 min",
    location: "456 Grill St, Steak Town",
    contact: "+1 555-987-3210",
    menu: [
      { name: "Ribeye Steak", price: "$25" },
      { name: "Filet Mignon", price: "$30" },
      { name: "Garlic Mashed Potatoes", price: "$8" },
    ],
    specialOffer: "Free dessert with every main course ordered!",
    reviews: [
      {
        username: "Jack Thomas",
        rating: 5,
        comment: "Perfectly cooked steaks every time!",
      },
      {
        username: "Emily White",
        rating: 4.5,
        comment: "Great steak, but the sides could use improvement.",
      },
    ],
  },
];
const Restaurants = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold text-center text-[#7A1523] mb-6">
          Explore Restaurants
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
