import React from "react";

const OrderDetails = ({ order }) => {
  return (
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
          <strong>Delivery Address:</strong> {order.deliveryAddress}
        </p>
        <p>
          <strong>Customer:</strong> {order.customerName}
        </p>
        <p>
          <strong>Contact:</strong> {order.phone}
        </p>
      </div>
    </td>
  );
};

export default OrderDetails;
