import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";

const AddRestaurant = () => {
  const navigate = useNavigate();
  const { addRestaurant } = useContext(RestaurantContext);

  const initialValues = {
    name: "",
    description: "",
    image: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Restaurant name is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.mixed().required("Image is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    // Convert the image to a usable URL
    const imageUrl = URL.createObjectURL(values.image);

    // Call the context to add the restaurant
    addRestaurant({
      name: values.name,
      description: values.description,
      image: imageUrl,
    });

    alert("Restaurant added successfully!");
    resetForm();
    navigate("/restaurants");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add a New Restaurant</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-4">
            <div>
              <Field
                name="name"
                placeholder="Restaurant Name"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <Field
                name="description"
                placeholder="Description"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="image" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              className="bg-[#FFE662] text-black py-2 px-6 rounded-full"
            >
              Add Restaurant
            </button>
          </Form>
        )}
      </Formik>
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
