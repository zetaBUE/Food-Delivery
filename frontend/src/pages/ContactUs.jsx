import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="max-w-lg bg-[#800020] text-white rounded-xl p-6 shadow-lg">
          <h1 className="text-5xl font-bold text-[#FFE662] mb-10">Contact us</h1>
          <p className="mb-4 text-xl">
            Your feedback matters! Contact us through one of the options below
          </p>
          <p className="mb-1">
            📧 Email: <span className="underline">cravecart@gmail.com</span>
          </p>
          <p>📞 Phone: +201275922666</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
