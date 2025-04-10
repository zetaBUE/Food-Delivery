import React from "react";
import { FaShippingFast, FaHeadset, FaComments, FaLock } from "react-icons/fa";
import Grey from "../assets/FoodDeliveryLogo.svg"; // Import the image
import FeaturesBox from "../components/FeaturesBox";

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* About Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#000]">About Us</h1>
      </section>

      {/* Info & Image Section */}
      <div className="flex flex-col md:flex-row justify-center items-start px-8 md:px-24 py-8 gap-8">
        <div className="bg-[#212121] p-6 rounded-lg min-w-[250px] max-w-[400px] h-auto relative z-10 shadow-md mb-6 flex flex-col">
          <h2 className="font-bold text-2xl mb-4 text-white">Crave Cart.</h2>
          <p className="text-lg text-white">
            Crave Cart is an online food ordering platform that lets you choose
            from a variety of restaurants with ease. Our goal is to make
            ordering as simple as possible, delivering your food right to your
            door with just a click. We offer a wide range of restaurant options
            to satisfy every craving, ensuring a fast and smooth delivery
            experience.
          </p>
        </div>

        <div className="w-full md:w-[400px] h-[300px] flex items-center justify-center relative z-0">
          <img
            src={Grey}
            alt="Grey Image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Features in a Smaller Purple Box */}
      <FeaturesBox />
    </div>
  );
};

export default About;
