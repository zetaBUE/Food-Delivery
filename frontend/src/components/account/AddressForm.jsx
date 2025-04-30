import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthContext";

const AddressForm = () => {
  const { user, login } = useAuth();

  const formik = useFormik({
    initialValues: {
      address: user?.address || "",
      city: user?.city || "",
      postalCode: user?.postalCode || "",
    },
    validationSchema: Yup.object({
      address: Yup.string().required("Address is required"),
      city: Yup.string().required("City is required"),
      postalCode: Yup.string().required("Postal code is required"),
    }),
    onSubmit: (values) => {
      // Update user info in auth context
      login({
        ...user,
        ...values,
      });
      alert("Address updated successfully!");
    },
  });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#FFE662]">
      <h2 className="text-xl font-semibold text-[#800020] mb-4">Add Address</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {["address", "city", "postalCode"].map((field) => (
          <div key={field}>
            <label className="block mb-1 text-[#800020] capitalize">
              {field}
            </label>
            <input
              type="text"
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
          Save Address
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
