import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import AddRestaurantForm from "../components/admin/AddRestaurantForm";
import RestaurantList from "../components/admin/RestaurantList";

const ManageRestaurant = () => {
  const navigate = useNavigate();
  const { addRestaurant, removeRestaurant, restaurants } =
    useContext(RestaurantContext);

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

  const handleRemoveRestaurant = (id) => {
    removeRestaurant(id);
    navigate("/restaurants");
  };

  return (
    <div className="py-10 px-6 text-white">
      <div className="max-w-3xl mx-auto space-y-12">
        <AddRestaurantForm onSubmit={handleSubmit} />
        <RestaurantList
          restaurants={restaurants}
          onRemoveRestaurant={handleRemoveRestaurant}
        />
      </div>
    </div>
  );
};

export default ManageRestaurant;
