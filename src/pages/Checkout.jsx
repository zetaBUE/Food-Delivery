import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  governorate: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
});

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { addOrder } = useOrder();

  const total = getCartTotal();  
  const shipping = "Free";  

  const handleSubmit = (values) => {
    const orderData = {
      items: cartItems,
      totalAmount: total,
      customerName: `${values.firstName} ${values.lastName}`,
      deliveryAddress: `${values.address}, ${
        values.apartment ? values.apartment + ", " : ""
      }${values.city}, ${values.governorate}${
        values.zipCode ? " " + values.zipCode : ""
      }`,
      phone: values.phone,
      email: values.email,
      paymentMethod: values.paymentMethod,
    };

    const newOrder = addOrder(orderData);
    alert(
      `Order placed successfully! Your order number is ${newOrder.orderNumber}`
    );
    clearCart();
    navigate("/orders");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate("/restaurants")}
          className="bg-[#FFE662] text-[#800020] px-6 py-2 rounded-full hover:bg-[#FFD700]"
        >
          Browse Restaurants
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            apartment: "",
            city: "",
            governorate: "",
            zipCode: "",
            email: "",
            phone: "",
            paymentMethod: "cash",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            {/* Delivery Details Section */}
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#800020]">
                Delivery Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Field
                    name="address"
                    placeholder="Street address"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Field
                    name="apartment"
                    placeholder="Apartment (optional)"
                    className="border p-2 w-full"
                  />
                </div>
                <div>
                  <Field
                    name="city"
                    placeholder="City"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="governorate"
                    placeholder="Region"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="governorate"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <Field
                    name="zipCode"
                    placeholder="Zip code (optional)"
                    className="border p-2 w-full"
                  />
                </div>
                <div className="md:col-span-2">
                  <Field
                    name="email"
                    placeholder="Email"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="md:col-span-2">
                  <Field
                    name="phone"
                    placeholder="Phone"
                    className="border p-2 w-full"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#800020]">
                Payment Method
              </h3>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <Field type="radio" name="paymentMethod" value="cash" />
                  <span className="text-black">Cash on delivery</span>
                </label>
                <label className="flex items-center gap-2">
                  <Field type="radio" name="paymentMethod" value="visa" />
                  <span className="text-black">Credit Card</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#FFE662] text-black py-2 px-6 rounded-full"
            >
              Place Order
            </button>
          </Form>
        </Formik>
      </div>

      {/* Order Summary Section */}
      <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:ml-4">
        <div className="bg-[#212121] p-4 rounded-lg shadow-sm text-white">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between py-1">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-sm">
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>{shipping}</span> {/* Shipping is displayed as "Free" */}
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
