import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AdminLogin = () => {
  const navigate = useNavigate();
  const { login, error } = useAuth();
  const [loginError, setLoginError] = useState(null);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setLoginError(null);
      const user = await login(values);
      if (user.role === "admin") {
        navigate("/admin/manageRestaurant");
      } else {
        setLoginError("Access denied. Admin privileges required.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    } catch (error) {
      setLoginError(error.response?.data?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <div className="bg-[#212121] m-auto mt-30 p-8 rounded-2xl w-130">
        <h2 className="text-white text-4xl font-bold mb-6 text-center">
          Admin Login
        </h2>
        {loginError && (
          <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
            {loginError}
          </div>
        )}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Admin Email"
                  className="w-full p-3 rounded-xl bg-white text-black border border-gray-600 focus:border-[#FFE662] focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  name="password"
                  type="password"
                  placeholder="Admin Password"
                  className="w-full p-3 rounded-xl bg-white text-black border border-gray-600 focus:border-[#FFE662] focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FFE662] text-[#212121] p-1.5 rounded-full hover:bg-[#FFD700] transition-colors disabled:opacity-50 font-light text-2xl"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AdminLogin;
