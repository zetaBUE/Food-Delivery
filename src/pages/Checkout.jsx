/*import React from 'react'

const Checkout = () => {
  return (
    <div>Checkout</div>
  
  )
}

export default Checkout*/


import React from 'react';
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

