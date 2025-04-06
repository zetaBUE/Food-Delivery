import React from "react";
import { FaShippingFast, FaHeadset, FaComments, FaLock } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* About Section */}
      <section className="text-center py-8">
        <h1 className="text-3xl font-bold text-[#000]">About Us</h1>
        <p className="text-[#444] mt-2">Lorem ipsum dolor sit amet consectetur. Felis platea fusce.</p>
      </section>

      {/* Info & Image Section */}
      <div className="flex flex-col md:flex-row justify-center items-start px-8 md:px-24 py-8 gap-8">
        <div className="bg-[#958582] p-6 rounded-lg text-white max-w-md relative z-10 shadow-md" style={{ marginRight: "-60px" }}>
          <h2 className="font-bold text-lg mb-2 text-black">Lorem ipsum dolor sit amet consectetur.</h2>
          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet consectetur. Morbi eget vitae enim ridiculus tempor est nulla arcu faucibus.
            Lobortis sed ut tellus varius lectus amet at. Faucibus dolor risus nisl ipsum. Potenti amet sed luctus
            massa. Odio ac etiam lectus auctor. Interdum pellentesque vel pellentesque vitae et. Eget congue in mauris
            luctus nulla lacus nulla. Pharetra urna nec amet feugiat ipsum. Id pharetra fusce morbi eget sed pretium
            sit diam facilisis.
          </p>
        </div>

        <div className="w-full md:w-[400px] h-[300px] border border-black flex items-center justify-center relative z-0">
          IMG
        </div>
      </div>

      {/* Features in a Smaller Purple Box */}
      <div className="bg-[#958582] p-4 mx-8 md:mx-auto md:w-[600px] rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-12">
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

export default About
