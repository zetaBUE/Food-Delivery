import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export function Account() {
  const navigate = useNavigate();

  // Formik for Account Info
  const accountForm = useFormik({
    initialValues: { name: "", email: "", phone: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().matches(
        /^[0-9]{10,15}$/,
        "Phone number is not valid"
      ),
    }),
    onSubmit: (values) => {
      console.log("Account Info:", values);
      alert("Account information updated!");
    },
  });

  // Formik for Password Change
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

  // Formik for Add Address
  const addressForm = useFormik({
    initialValues: { address: "", city: "", postalCode: "" },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      postalCode: Yup.string().required("Postal code is required"),
    }),
    onSubmit: (values) => {
      console.log("Address Info:", values);
      alert("Address added successfully!");
    },
  });

  return (
    <div className="flex max-w-6xl mx-auto p-6 space-x-8">
      {/* Sidebar Navigation */}
      <aside className="w-1/4 bg-[#424242] shadow-lg rounded-2xl p-4 h-fit">
        <nav className="space-y-4">
          <button
            onClick={() => navigate("/orders")}
            className="w-full text-left px-4 py-2 rounded-xl bg-[#800020] text-white transition"
          >
            Orders
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="w-full text-left px-4 py-2 rounded-xl bg-[#800020] text-white transition"
          >
            Cart
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 space-y-8">
        <h1 className="text-3xl font-bold text-[#800020] mb-4">My Account</h1>

        {/* Account Information */}
        <div className="bg-[white] p-6 rounded-2xl shadow-md border-t-4 border-[#FFE662]">
          <h2 className="text-xl font-semibold text-[#800020] mb-4">
            Account Information
          </h2>
          <form onSubmit={accountForm.handleSubmit} className="space-y-4">
            {["name", "email", "phone"].map((field) => (
              <div key={field}>
                <label className="block mb-1 text-[#800020] capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  onChange={accountForm.handleChange}
                  value={accountForm.values[field]}
                  className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
                />
                {accountForm.touched[field] && accountForm.errors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {accountForm.errors[field]}
                  </p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#800020] text-white px-6 py-2 rounded-xl hover:bg-[#a32638] transition"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Add Address */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#FFE662]">
          <h2 className="text-xl font-semibold text-[#800020] mb-4">
            Add Address
          </h2>
          <form onSubmit={addressForm.handleSubmit} className="space-y-4">
            {["address", "city", "postalCode"].map((field) => (
              <div key={field}>
                <label className="block mb-1 text-[#800020] capitalize">
                  {field}
                </label>
                <input
                  type="text"
                  name={field}
                  onChange={addressForm.handleChange}
                  value={addressForm.values[field]}
                  className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
                />
                {addressForm.touched[field] && addressForm.errors[field] && (
                  <p className="text-red-500 text-sm mt-1">
                    {addressForm.errors[field]}
                  </p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="bg-[#800020] text-white px-6 py-2 rounded-xl hover:bg-[#a32638] transition"
            >
              Add Address
            </button>
          </form>
        </div>

        {/* Change Password */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#FFE662]">
          <h2 className="text-xl font-semibold text-[#800020] mb-4">
            Change Password
          </h2>
          <form onSubmit={passwordForm.handleSubmit} className="space-y-4">
            {["currentPassword", "newPassword", "confirmPassword"].map(
              (field) => (
                <div key={field}>
                  <label className="block mb-1 text-[#800020] capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="password"
                    name={field}
                    onChange={passwordForm.handleChange}
                    value={passwordForm.values[field]}
                    className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
                  />
                  {passwordForm.touched[field] &&
                    passwordForm.errors[field] && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordForm.errors[field]}
                      </p>
                    )}
                </div>
              )
            )}
            <button
              type="submit"
              className="bg-[#800020] text-white px-6 py-2 rounded-xl hover:bg-[#a32638] transition"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Account;
