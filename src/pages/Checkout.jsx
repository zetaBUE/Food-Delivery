import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useOrder } from "../context/OrderContext";
import EmptyCart from "../components/checkout/EmptyCart";
import DeliveryForm from "../components/checkout/DeliveryForm";
import PaymentMethodForm from "../components/checkout/PaymentMethodForm";
import OrderSummary from "../components/checkout/OrderSummary";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  governorate: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits and numbers")
    .required("Required"),
  zipCode: Yup.string().matches(/^\d+$/, "Zip code must be a number"),
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
    return <EmptyCart />;
  }

  return (
    <div className="flex flex-col lg:flex-row">
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
            <DeliveryForm />
            <PaymentMethodForm />
            <button
              type="submit"
              className="bg-[#FFE662] text-black py-4 px-6 rounded-full mb-4"
            >
              Place Order
            </button>
          </Form>
        </Formik>
      </div>

      <div className="w-full lg:w-1/3 mt-12 lg:ml-4">
        <OrderSummary cartItems={cartItems} total={total} shipping={shipping} />
      </div>
    </div>
  );
};

export default Checkout;
