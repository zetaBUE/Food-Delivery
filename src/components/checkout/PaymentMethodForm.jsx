import React from "react";
import { Field } from "formik";

const PaymentMethodForm = () => {
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
    </div>
  );
};

export default PaymentMethodForm;
