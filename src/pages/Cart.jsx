import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const formik = useFormik({
    initialValues: { coupon: "" },
    validationSchema: Yup.object({
      coupon: Yup.string()
        .min(3, "Must be at least 3 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(`Coupon Applied: ${values.coupon}`);
    },
  });

  const subtotal = getCartTotal();
  const shipping = 5;
  const total = subtotal + shipping;

  const handleIncreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const handleDecreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 space-y-8">
      <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#212121] text-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>

          <div className="grid grid-cols-5 text-white font-semibold border-b border-gray-700 pb-2 mb-4">
            <span>Product</span>
            <span className="text-center">Price</span>
            <span className="text-center">Quantity</span>
            <span className="text-right">Subtotal</span>
            <span className="text-right">Actions</span>
          </div>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-5 items-center">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <span>{item.name}</span>
                </div>

                <div className="text-center">${item.price.toFixed(2)}</div>

                <div className="text-center">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-700 text-white rounded-full"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-700 text-white rounded-full"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="text-right">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt className="inline-block" size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Apply Coupon Code
            </h3>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
            >
              <input
                id="coupon"
                name="coupon"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.coupon}
                placeholder="Enter coupon code"
                className="flex-1 p-2 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button
                type="submit"
                className="bg-[#800020] text-white px-4 py-2 rounded-lg shadow-md"
              >
                Apply
              </button>
            </form>
            {formik.touched.coupon && formik.errors.coupon && (
              <div className="text-red-500 text-sm mt-2">
                {formik.errors.coupon}
              </div>
            )}
          </div>
        </div>

        <div className="bg-[#212121] text-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-700 my-2"></div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/restaurants")}
            className="mt-4 w-full bg-[#800020] text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg"
          >
            Add More Items
          </button>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-[#FFE662] text-[#800020] px-4 py-2 rounded-xl shadow-md hover:shadow-lg"
          >
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}

export default Cart;
