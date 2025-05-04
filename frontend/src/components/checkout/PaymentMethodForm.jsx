import React from "react";
import { Field } from "formik";

const PaymentMethodForm = () => {
  return (
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

      {/* Conditionally render credit card fields */}
      <div className="mt-4">
        {/** Credit Card Fields */}
        {({ form }) => (
          <>
            {form.values.paymentMethod === "visa" && (
              <>
                <div className="mt-4">
                  <label className="block text-sm font-semibold">Credit Card Number</label>
                  <Field
                    name="creditCardNumber"
                    type="text"
                    placeholder="1234 1234 1234 1234"
                    className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  />
                  {form.errors.creditCardNumber && form.touched.creditCardNumber && (
                    <div className="text-red-500 text-xs">{form.errors.creditCardNumber}</div>
                  )}
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold">Expiry Date</label>
                  <Field
                    name="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  />
                  {form.errors.expiryDate && form.touched.expiryDate && (
                    <div className="text-red-500 text-xs">{form.errors.expiryDate}</div>
                  )}
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-semibold">CVV</label>
                  <Field
                    name="cvv"
                    type="text"
                    placeholder="123"
                    className="mt-2 p-2 border border-gray-300 rounded-md w-full"
                  />
                  {form.errors.cvv && form.touched.cvv && (
                    <div className="text-red-500 text-xs">{form.errors.cvv}</div>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentMethodForm;
