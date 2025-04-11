import { useFormik } from "formik";
import * as Yup from "yup";

const AccountInfoForm = () => {
  const formik = useFormik({
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

  return (
    <div className="bg-[white] p-6 rounded-2xl shadow-md border-t-4 border-[#FFE662]">
      <h2 className="text-xl font-semibold text-[#800020] mb-4">
        Account Information
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {["name", "email", "phone"].map((field) => (
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
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountInfoForm;
