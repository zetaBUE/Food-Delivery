import React from "react";
import { Link } from "react-router-dom";
import Wave from "../assets/Wave.svg";
import Grey from "../assets/Grey.jpeg";
import { FaArrowRight } from "react-icons/fa";
import FeaturesBox from "../components/FeaturesBox";

function Home() {
  return (
    <>
      <img
        src={Wave}
        alt="Wave"
        className="w-full absolute top-0 rotate-180 z-[-10]"
      />

      <div className="h-fit mt-70 mb-40 flex items-center pl-20">
        <div className="flex-1">
          <span className="text-5xl font-bold text-[#212121] text-shadow-lg shadow-gray-800">
            We are ready to deliver <br />
            your favorite food <br />
            items
          </span>
          <Link to="/checkout" className="flex ml-45 justify-start">
            <button className="bg-[#FEE662] text-[#212121] text-lg ease-out px-5 py-2 rounded-full hover:scale-110 transition-all duration-200 flex items-center gap-2">
              Order Now
              <FaArrowRight />
            </button>
          </Link>
        </div>

        <div className="flex-1">
          <img
            src={Grey}
            alt="Grey"
            className="w-full ml-25 max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
      <FeaturesBox />
    </>
  );
}

export default Home;
