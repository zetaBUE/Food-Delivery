import { Route, Routes } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Menus from "./pages/Menus";
import Orders from "./pages/Orders";
import Restaurants from "./pages/Restaurants";
import UserOrders from "./pages/UserOrders";
import ListItems from "./pages/ListItems";
import AddRestaurant from "./pages/AddRestaurant";
import FAQ from "./pages/FAQ";
import RestaurantView from "./pages/RestaurantView";
import RestaurantsOriginal from "./pages/RestaurantsOriginal";
import { CartProvider } from "./context/CartContext";
import { OrderProvider } from "./context/OrderContext";
import { RestaurantProvider } from "./context/RestaurantContext";
export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <RestaurantProvider>
        <main classname="overflow-hidden">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurants1" element={<RestaurantsOriginal />} />
            <Route path="/restaurant/:id" element={<RestaurantView />} />
            <Route path="/user-orders" element={<UserOrders />} />
            <Route path="/list-items" element={<ListItems />} />
            <Route path="/add-Restaurant" element={<AddRestaurant />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          <Footer />
        </main>
        </RestaurantProvider>
      </OrderProvider>
    </CartProvider>
  );
}
