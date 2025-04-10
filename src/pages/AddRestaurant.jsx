import React, { useState, useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

const AddRestaurant = () => {
  const { addRestaurant } = useContext(RestaurantContext);
  const [formData, setFormData] = useState({
    name: "",
    photo: null, // Changed to store File object
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      photo: e.target.files[0], // Handle file selection
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object URL for the image file if available
    const photoUrl = formData.photo ? URL.createObjectURL(formData.photo) : null;

    const newRestaurant = {
      name: formData.name,
      photo: photoUrl,
      description: formData.description,
      path: "/faq", // Replace with actual path
    };

    addRestaurant(newRestaurant); // Add restaurant to context
    alert("Restaurant added!");
    setFormData({ name: "", photo: null, description: "" }); // Reset form data
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Restaurant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;

/*import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RestaurantContext } from "../context/RestaurantContext";

// Yup validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  photo: Yup.mixed().required("Photo is required"),
  description: Yup.string().required("Description is required"),
});

const AddRestaurant = () => {
  const { addRestaurant } = useContext(RestaurantContext);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      photo: null,
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      addRestaurant(values);
      alert("Restaurant added!");
      formik.resetForm(); // Reset the form after submission
    },
  });

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("photo", file); // Store file in Formik state
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Restaurant</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Photo</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            onBlur={formik.handleBlur}
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          {formik.touched.photo && formik.errors.photo && (
            <div className="text-red-500 text-sm">{formik.errors.photo}</div>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;*/
