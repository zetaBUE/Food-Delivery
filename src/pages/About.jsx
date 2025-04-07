import React from "react";
import { FaShippingFast, FaHeadset, FaComments, FaLock } from "react-icons/fa";
import Grey from '../assets/FoodDeliveryLogo.svg'; // Import the image

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* About Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-[#000]">About Us</h1>
      </section>

      {/* Info & Image Section */}
      <div className="flex flex-col md:flex-row justify-center items-start px-8 md:px-24 py-8 gap-8">
        <div className="bg-[#958582] p-6 rounded-lg text-white min-w-[250px] max-w-[400px] h-auto relative z-10 shadow-md mb-6 flex flex-col">
          <h2 className="font-bold text-2xl mb-4 text-black">Crave Cart.</h2>
          <p className="text-lg text-black">
            Crave Cart is an online ordering platform that lets you choose from a variety of restaurants with ease. Our goal is to make ordering as simple as possible, delivering your food right to your door with just a click. We offer a wide range of restaurant options to satisfy every craving, ensuring a fast and smooth delivery experience.
          </p>
        </div>

        <div className="w-full md:w-[400px] h-[300px] flex items-center justify-center relative z-0">
          <img src={Grey} alt="Grey Image" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>

      {/* Features in a Smaller Purple Box */}
      <div className="bg-[#958582] p-4 mx-8 md:mx-auto md:w-[600px] rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-24">
        <div className="flex items-start gap-3 bg-[#958582] text-white p-3 rounded-md">
          <div className="bg-[#800020] p-2 rounded-full flex items-center justify-center">
            <FaShippingFast className="text-[#FEE662] text-lg" />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Free Shipping</h4>
            <p className="text-xs text-black">Free shipping on all your orders</p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-[#958582] text-white p-3 rounded-md">
          <div className="bg-[#800020] p-2 rounded-full flex items-center justify-center">
            <FaHeadset className="text-[#FEE662] text-lg" />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Customer Support 24/7</h4>
            <p className="text-xs text-black">Instant access to support</p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-[#958582] text-white p-3 rounded-md">
          <div className="bg-[#800020] p-2 rounded-full flex items-center justify-center">
            <FaComments className="text-[#FEE662] text-lg" />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">Customer Feedback</h4>
            <p className="text-xs text-black">Customer Satisfaction is our priority</p>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-[#958582] text-white p-3 rounded-md">
          <div className="bg-[#800020] p-2 rounded-full flex items-center justify-center">
            <FaLock className="text-[#FEE662] text-lg" />
          </div>
          <div>
            <h4 className="font-bold text-black text-sm">100% Secure Payment</h4>
            <p className="text-xs text-black">We ensure your money is safe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
