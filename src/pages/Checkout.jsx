/*import React from 'react'

const Checkout = () => {
  return (
    <div>Checkout</div>
    first name-last name-address-apartment-city,governorate-postalcode,phone
  )
}

export default Checkout*/


/*import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const CheckoutPage = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    address: Yup.string().required('Address is required'),
    paymentMethod: Yup.string().required('Payment method is required'),
  });

  const handleSubmit = (values) => {
    console.log('Form data:', values);
    // Handle form submission
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          paymentMethod: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="mt-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <Field id="name" name="name" type="text" className="mt-1 p-2 border rounded w-full" />
              {errors.name && touched.name ? <div className="text-red-500 text-xs">{errors.name}</div> : null}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <Field id="email" name="email" type="email" className="mt-1 p-2 border rounded w-full" />
              {errors.email && touched.email ? <div className="text-red-500 text-xs">{errors.email}</div> : null}
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium">Address</label>
              <Field id="address" name="address" type="text" className="mt-1 p-2 border rounded w-full" />
              {errors.address && touched.address ? <div className="text-red-500 text-xs">{errors.address}</div> : null}
            </div>

            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block text-sm font-medium">Payment Method</label>
              <Field as="select" id="paymentMethod" name="paymentMethod" className="mt-1 p-2 border rounded w-full">
                <option value="">Select Payment Method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
              </Field>
              {errors.paymentMethod && touched.paymentMethod ? <div className="text-red-500 text-xs">{errors.paymentMethod}</div> : null}
            </div>

            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded w-full">
              Submit Order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutPage;
*/
/*import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Checkout() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      apartment: "",
      city: "",
      governorate: "",
      zipCode: "",
      email: "",
      phone: "",
      paymentMethod: "cash"
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      governorate: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required")
    }),
    onSubmit: values => {
      console.log("Order placed:", values);
    }
  });

  const cart = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 35 }
  ];

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white p-4 flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="First Name"
            className="border p-2"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            className="border p-2"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <input
            name="address"
            placeholder="Street address"
            className="border p-2 col-span-2"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <input
            name="apartment"
            placeholder="Apartment (optional)"
            className="border p-2 col-span-2"
            onChange={formik.handleChange}
            value={formik.values.apartment}
          />
          <input
            name="city"
            placeholder="City"
            className="border p-2"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <input
            name="governorate"
            placeholder="Region"
            className="border p-2"
            onChange={formik.handleChange}
            value={formik.values.governorate}
          />
          <input
            name="zipCode"
            placeholder="Zip code (optional)"
            className="border p-2"
            onChange={formik.handleChange}
            value={formik.values.zipCode}
          />
          <input
            name="email"
            placeholder="Email"
            className="border p-2 col-span-2"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            name="phone"
            placeholder="Phone"
            className="border p-2 col-span-2"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />

          <div className="col-span-2 flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formik.values.paymentMethod === "cash"}
                onChange={formik.handleChange}
              />
              <span className="text-[800020]">Cash on delivery</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="paymentMethod"
                value="visa"
                checked={formik.values.paymentMethod === "visa"}
                onChange={formik.handleChange}
              />
              <span className="text-[800020]">Visa</span>
            </label>
          </div>

          <button type="submit" className="bg-[#FFE662] text-black py-2 px-6 rounded-full mt-4">
            Place Order
          </button>
        </form>
      </div>

      <div className="w-full lg:w-1/3 bg-gray-100 p-4 mt-8 lg:mt-0 lg:ml-4 border border-[#FFE662]">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id} className="flex justify-between py-1">
              <span>{item.name}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t pt-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>${shipping}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}*/

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  governorate: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required")
});

const Checkout = () => {
  const navigate = useNavigate();

  const cart = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 35 }
  ];

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const shipping = 5;
  const total = subtotal + shipping;

  const handleSubmit = (values) => {
    alert(`Order placed successfully! Thank you, ${values.firstName} ${values.lastName}.`);
    navigate("/orders");
  };

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
            paymentMethod: "cash"
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6">
            {/* Delivery Details Section */}
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#800020]">Delivery Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Field name="firstName" placeholder="First Name" className="border p-2 w-full" />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <Field name="lastName" placeholder="Last Name" className="border p-2 w-full" />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Field name="address" placeholder="Street address" className="border p-2 w-full" />
                  <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Field name="apartment" placeholder="Apartment (optional)" className="border p-2 w-full" />
                </div>
                <div>
                  <Field name="city" placeholder="City" className="border p-2 w-full" />
                  <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <Field name="governorate" placeholder="Region" className="border p-2 w-full" />
                  <ErrorMessage name="governorate" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <Field name="zipCode" placeholder="Zip code (optional)" className="border p-2 w-full" />
                </div>
                <div className="md:col-span-2">
                  <Field name="email" placeholder="Email" className="border p-2 w-full" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Field name="phone" placeholder="Phone" className="border p-2 w-full" />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#800020]">Payment Method</h3>
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

            <button type="submit" className="bg-[#FFE662] text-black py-2 px-6 rounded-full">
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
            {cart.map(item => (
              <li key={item.id} className="flex justify-between py-1">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout