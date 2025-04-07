import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Orders = () => {
  // Example orders data (with some older orders added)
  const orders = [
    {
      id: 1,
      orderNumber: "#1234",
      date: "2025-04-05",
      totalAmount: 30.99,
      status: "Delivered",
      items: [
        { name: "Burger", quantity: 2, price: 10 },
        { name: "Fries", quantity: 1, price: 5.99 },
      ],
    },
    {
      id: 2,
      orderNumber: "#1235",
      date: "2025-04-06",
      totalAmount: 45.50,
      status: "Pending",
      items: [
        { name: "Pizza", quantity: 1, price: 20.50 },
        { name: "Soda", quantity: 2, price: 5.00 },
      ],
    },
    {
      id: 3,
      orderNumber: "#1236",
      date: "2025-04-07",
      totalAmount: 22.75,
      status: "Shipped",
      items: [
        { name: "Sandwich", quantity: 1, price: 12.75 },
        { name: "Salad", quantity: 1, price: 10.00 },
      ],
    },
    {
      id: 4,
      orderNumber: "#1237",
      date: "2025-03-20",
      totalAmount: 55.00,
      status: "Delivered",
      items: [
        { name: "Pasta", quantity: 2, price: 12.50 },
        { name: "Garlic Bread", quantity: 1, price: 5.00 },
      ],
    },
    {
      id: 5,
      orderNumber: "#1238",
      date: "2025-02-25",
      totalAmount: 15.25,
      status: "Pending",
      items: [
        { name: "Salad", quantity: 1, price: 10.00 },
        { name: "Juice", quantity: 1, price: 5.25 },
      ],
    },
    {
      id: 6,
      orderNumber: "#1239",
      date: "2025-01-30",
      totalAmount: 30.0,
      status: "Failed",
      items: [
        { name: "Brownies", quantity: 2, price: 15.00 },
      ],
    },
    {
      id: 7, 
      orderNumber: "#1240", 
      date: "2024-12-20", 
      totalAmount: 100, 
      status: "Delivered", 
      items: [
        { name: "Sushi", quantity: 20, price: 5 }, 
      ]
    },
  ];

  const [filteredOrders, setFilteredOrders] = useState(orders); // State for filtered orders
  const [expandedOrder, setExpandedOrder] = useState(null); // State for expanded order details

  // Formik setup
  const formik = useFormik({
    initialValues: {
      searchOrder: "",
    },
    validationSchema: Yup.object({
      searchOrder: Yup.string().min(3, "Order number must be at least 3 characters").required("Required"),
    }),
    onSubmit: (values) => {
      // Filter orders based on search input
      const filtered = orders.filter((order) =>
        order.orderNumber.includes(values.searchOrder)
      );
      setFilteredOrders(filtered);
    },
  });

  // Handle toggling order details
  const toggleOrderDetails = (orderId) => {
    setExpandedOrder((prev) => (prev === orderId ? null : orderId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Orders Page Header */}
      <div className="bg-[#101035] text-white py-4">
        <h1 className="text-3xl font-bold text-center">Order History</h1>
      </div>

      {/* Search Filter */}
      <div className="container mx-auto p-4">
        <form onSubmit={formik.handleSubmit} className="flex items-center gap-4">
          <input
            type="text"
            id="searchOrder"
            name="searchOrder"
            placeholder="Search Order by ID"
            className="p-2 w-1/2 border border-gray-300 rounded-md"
            onChange={formik.handleChange}
            value={formik.values.searchOrder}
          />
          {formik.errors.searchOrder && formik.touched.searchOrder && (
            <div className="text-red-500">{formik.errors.searchOrder}</div>
          )}
          <button type="submit" className="bg-[#FFE662] px-4 py-2 rounded-md text-[#800020]">
            Search
          </button>
        </form>
      </div>

      {/* Orders Table */}
      <div className="container mx-auto p-4">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-[#800020] text-white">
              <th className="px-4 py-2 text-left">Order ID</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Total Price</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <React.Fragment key={order.id}>
                  <tr className="border-b">
                    <td className="px-4 py-2">{order.orderNumber}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">${order.totalAmount}</td>
                    <td className="px-4 py-2 text-gray-800">{order.status}</td>
                    <td className="px-4 py-2">
                      <button
                        className="px-4 py-2 rounded-md text-[#800020]"
                        onClick={() => toggleOrderDetails(order.id)}
                      >
                        {expandedOrder === order.id ? (
                          <>
                            - Hide Details
                          </>
                        ) : (
                          <>
                            + View Details
                          </>
                        )}
                      </button>
                    </td>
                  </tr>
                  {expandedOrder === order.id && (
                    <tr>
                      <td colSpan="5" className="px-4 py-2 bg-gray-50">
                        <h3 className="text-xl font-semibold">Items:</h3>
                        <ul className="list-disc pl-6">
                          {order.items.map((item, index) => (
                            <li key={index} className="mt-2">
                              {item.name} - {item.quantity} x ${item.price}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center">No orders found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;