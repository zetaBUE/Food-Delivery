import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (values, { setSubmitting }) => {
    // In a real app, you would verify admin credentials against a backend
    if (values.username === "admin" && values.password === "admin123") {
      login({ ...values, isAdmin: true });
      navigate("/admin/manageRestaurant");
    } else {
      alert("Invalid admin credentials");
    }
    setSubmitting(false);
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="bg-[#212121] m-auto mt-30 p-8 rounded-2xl w-130">
        <h2 className="text-white text-4xl font-bold mb-6 text-center">
          Admin Login
        </h2>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="username"
                  type="text"
                  placeholder="Admin Username"
                  className="w-full p-3 rounded-xl bg-white text-black border border-gray-600 focus:border-[#FFE662] focus:outline-none"
                />
                {errors.username && touched.username && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.username}
                  </div>
                )}
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Admin Password"
                  className="w-full p-3 rounded-xl bg-white text-black border border-gray-600 focus:border-[#FFE662] focus:outline-none"
                />
                {errors.password && touched.password && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFE662] text-[#212121] p-1.5 rounded-full hover:bg-[#FFD700] transition-colors disabled:opacity-50 font-light text-2xl"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;
