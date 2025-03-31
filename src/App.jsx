import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"; 
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
import AddItems from "./pages/AddItems";
import FAQ from "./pages/FAQ";

export default function App () {
  return (
    <main>
    <Header> 
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/account" element = {<Account />}/>
        <Route path="/cart" element = {<Cart />}/>
        <Route path="/checkout" element = {<Checkout />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/menus" element = {<Menus />}/>
        <Route path="/orders" element = {<Orders />}/>
        <Route path="/restaurants" element = {<Restaurants />}/>
        <Route path="/user-orders" element = {<UserOrders />}/>
        <Route path="/list-items" element = {<ListItems/>}/>
        <Route path="/add-items" element = {<AddItems/>}/>
        <Route path="/faq" element = {<FAQ/>}/>
      </Routes>
    </Header>
    </main>
  )
}



/* import FoodLogo from './assets/FoodDeliveryLogo.svg'
import './App.css'
function App() {
  return (
    <>
      <div class="logo-container">
        <a target='_blank'>
          <img src={FoodLogo} class="food" alt="Food logo" />
        </a>
      </div>
      <h1 class="text-3xl font-bold hover:text-sky-700 ">Crave Cart</h1>
      <div className="card">
      </div>
    </>
  )
}

export default App */ 
