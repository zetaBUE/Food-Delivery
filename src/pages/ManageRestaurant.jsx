import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RestaurantContext } from "../context/RestaurantContext";

const ManageRestaurant = () => {
  const navigate = useNavigate();
  const { addRestaurant, removeRestaurant, restaurants } =
    useContext(RestaurantContext);

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
    const reader = new FileReader();

    reader.onload = (e) => {
      const base64Image = e.target.result;

      addRestaurant({
        name: values.name,
        description: values.description,
        image: base64Image,
        cuisine: "Various",
        deliveryTime: "30-45 min",
        location: "Address pending",
        contact: "Contact pending",
        menu: [],
      });

      alert("Restaurant added successfully!");
      resetForm();
      navigate("/restaurants");
    };

    if (values.image) {
      reader.readAsDataURL(values.image);
    }
  };

  return (
    <div className=" py-10 px-6 text-white">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="bg-[#2e2e2e] shadow-lg rounded-2xl p-8 border border-[#FFE662]">
          <h2 className="text-3xl font-bold text-[#FFE662] mb-6 text-center">
            Add a New Restaurant
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="space-y-5">
                <div>
                  <label className="block font-medium mb-1 text-[#FFE662]">
                    Restaurant Name
                  </label>
                  <Field
                    name="name"
                    placeholder="e.g., Spicy Kitchen"
                    className="w-full p-3 border border-gray-400 rounded-lg bg-[#1d1d1d] text-white focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1 text-[#FFE662]">
                    Description
                  </label>
                  <Field
                    name="description"
                    placeholder="Short description"
                    className="w-full p-3 border border-gray-400 rounded-lg bg-[#1d1d1d] text-white focus:outline-none focus:ring-2 focus:ring-[#FFE662]"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1 text-[#FFE662]">
                    Image
                  </label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={(event) =>
                      setFieldValue("image", event.currentTarget.files[0])
                    }
                    className="w-full p-2 border border-gray-400 rounded-lg bg-[#1d1d1d] text-white"
                  />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="text-red-400 text-sm mt-1"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#800020] text-[#FFE662] font-semibold px-6 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition duration-200"
                  >
                    Add Restaurant
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#800020] mb-6 text-center">
            Existing Restaurants
          </h3>
          <ul className="space-y-4">
            {restaurants.map((restaurant) => (
              <li
                key={restaurant.id}
                className="flex justify-between items-center bg-[#2e2e2e] border border-[#FFE662] rounded-xl p-5 shadow hover:shadow-md transition"
              >
                <div>
                  <h4 className="text-lg font-semibold text-[#FFE662]">
                    {restaurant.name}
                  </h4>
                  <p className="text-sm text-gray-300">
                    {restaurant.description}
                  </p>
                </div>
                <button
                  onClick={() => {
                    removeRestaurant(restaurant.id);
                    navigate("/restaurants");
                  }}
                  className="bg-[#800020] text-white px-4 py-2 rounded-full hover:bg-[#a0262c] transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ManageRestaurant;
