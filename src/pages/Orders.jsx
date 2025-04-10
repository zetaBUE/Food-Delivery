import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useOrder } from "../hooks/useOrder";

const Orders = () => {
  const { orders, searchOrders } = useOrder();
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [expandedOrder, setExpandedOrder] = useState(null);

  const formik = useFormik({
    initialValues: {
      searchOrder: "",
    },
    validationSchema: Yup.object({
      searchOrder: Yup.string()
        .min(3, "Order number must be at least 3 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const filtered = searchOrders(values.searchOrder);
      setFilteredOrders(filtered);
    },
  });

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
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center gap-4"
        >
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
          <button
            type="submit"
            className="bg-[#FFE662] px-4 py-2 rounded-md text-[#800020]"
          >
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
                    <td className="px-4 py-2">
                      ${order.totalAmount.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-gray-800">{order.status}</td>
                    <td className="px-4 py-2">
                      <button
                        className="px-4 py-2 rounded-md text-[#800020]"
                        onClick={() => toggleOrderDetails(order.id)}
                      >
                        {expandedOrder === order.id ? (
                          <>- Hide Details</>
                        ) : (
                          <>+ View Details</>
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
                        <div className="mt-4">
                          <p>
                            <strong>Delivery Address:</strong>{" "}
                            {order.deliveryAddress}
                          </p>
                          <p>
                            <strong>Customer:</strong> {order.customerName}
                          </p>
                          <p>
                            <strong>Contact:</strong> {order.phone}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
