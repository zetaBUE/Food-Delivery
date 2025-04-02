import React from "react";
import Wave from "../assets/Wave.svg";

function Home() {
  return (
    <>
      <img
        src={Wave}
        alt="Wave"
        className="w-full fixed top-0 rotate-180 z-[-10]"
      />
    </>
  );
}

export default Home;
