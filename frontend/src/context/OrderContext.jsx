import React, { createContext, useState, useEffect, useContext } from "react";

const OrderContext = createContext(null);

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (orderData) => {
    const newOrder = {
      id: orders.length + 1,
      orderNumber: `#${Math.floor(Math.random() * 10000)}`,
      date: new Date().toISOString().split("T")[0],
      ...orderData,
      status: "Pending",
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    return newOrder;
  };

  const getOrders = () => orders;

  const searchOrders = (orderNumber) => {
    return orders.filter((order) =>
      order.orderNumber.toLowerCase().includes(orderNumber.toLowerCase())
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrders,
        searchOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext };
