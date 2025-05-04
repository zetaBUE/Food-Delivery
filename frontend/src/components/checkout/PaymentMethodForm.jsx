
import React from "react";
import { Field, useFormikContext } from "formik";

const PaymentMethodForm = () => {
  const { values, errors, touched } = useFormikContext();

  return (
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

      {values.paymentMethod === "visa" && (
        <>
          <div className="mt-4">
            <label className="block text-sm font-semibold">
              Credit Card Number
            </label>
            <Field
              name="creditCardNumber"
              type="text"
              placeholder="1234123412341234"
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.creditCardNumber && touched.creditCardNumber && (
              <div className="text-red-500 text-xs">
                {errors.creditCardNumber}
              </div>
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold">Expiry Date</label>
            <Field
              name="expiryDate"
              type="month"
              className="mt-2 p-2 border border-gray-300 rounded-md w-full"
            />
            {errors.expiryDate && touched.expiryDate && (
              <div className="text-red-500 text-xs">{errors.expiryDate}</div>
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
            {errors.cvv && touched.cvv && (
              <div className="text-red-500 text-xs">{errors.cvv}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentMethodForm;
