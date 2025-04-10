import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export function Account() {
  const accountForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(
        /^[0-9]{10,15}$/,
        "Phone numbber is not valid"
      ),
    }),
    onSubmit: (values) => {
      console.log("Account Info:", values);
      alert("Account information updated!");
    },
  });
  const passwordForm = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm your new password"),
    }),
    onSubmit: (values) => {
      console.log("Password Change:", values);
      alert("Password updated successfully!");
    },
  });
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#800020] mb-8">My Account</h1>

      {/* Account Information Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10 border-t-4 border-[#FFE662]">
        <h2 className="text-xl font-semibold text-[#800020] mb-4">
          Account Information
        </h2>
        <form onSubmit={accountForm.handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-[#800020]">Name</label>
            <input
              type="text"
              name="name"
              onChange={accountForm.handleChange}
              value={accountForm.values.name}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
            />
            {accountForm.touched.name && accountForm.errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {accountForm.errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#800020]">Email</label>
            <input
              type="email"
              name="email"
              onChange={accountForm.handleChange}
              value={accountForm.values.email}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
            />
            {accountForm.touched.email && accountForm.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {accountForm.errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-[#800020]">Phone Number</label>
            <input
              type="text"
              name="phone"
              onChange={accountForm.handleChange}
              value={accountForm.values.phone}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
            />
            {accountForm.touched.phone && accountForm.errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {accountForm.errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#800020] text-white px-6 py-2 rounded-xl hover:bg-[#a32638] transition"
          >
            Save Changes
          </button>
        </form>
      </div>

      {/* Change Password Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#FFE662]">
        <h2 className="text-xl font-semibold text-[#800020] mb-4">
          Change Password
        </h2>
        <form onSubmit={passwordForm.handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-[#800020]">
              Current Password
            </label>
            <input
              type="password"
              name="currentPassword"
              onChange={passwordForm.handleChange}
              value={passwordForm.values.currentPassword}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
            />
            {passwordForm.touched.currentPassword &&
              passwordForm.errors.currentPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {passwordForm.errors.currentPassword}
                </p>
              )}
          </div>

          <div>
            <label className="block mb-1 text-[#800020]">New Password</label>
            <input
              type="password"
              name="newPassword"
              onChange={passwordForm.handleChange}
              value={passwordForm.values.newPassword}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
            />
            {passwordForm.touched.newPassword &&
              passwordForm.errors.newPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {passwordForm.errors.newPassword}
                </p>
              )}
          </div>

          <div>
            <label className="block mb-1 text-[#800020]">
              Confirm New Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={passwordForm.handleChange}
              value={passwordForm.values.confirmPassword}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
            />
            {passwordForm.touched.confirmPassword &&
              passwordForm.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {passwordForm.errors.confirmPassword}
                </p>
              )}
          </div>

          <button
            type="submit"
            className="bg-[#800020] text-white px-6 py-2 rounded-xl hover:bg-[#a32638] transition"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
export default Account;
