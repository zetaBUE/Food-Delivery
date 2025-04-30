import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";

const PasswordForm = () => {
  const { user, login } = useAuth();

  const formik = useFormik({
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
      // In a real app, we would verify the current password first
      // For demo purposes, we'll just update the password
      login({
        ...user,
        password: values.newPassword,
      });
      alert("Password updated successfully!");
      formik.resetForm();
    },
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#FFE662]">
      <h2 className="text-xl font-semibold text-[#800020] mb-4">
        Change Password
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
          <div key={field}>
            <label className="block mb-1 text-[#800020] capitalize">
              {field.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="password"
              name={field}
              onChange={formik.handleChange}
              value={formik.values[field]}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
            />
            {formik.touched[field] && formik.errors[field] && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors[field]}
              </p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#800020] text-white px-6 py-2 rounded-xl hover:bg-[#a32638] transition"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
