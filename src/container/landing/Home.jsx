import React from "react";
import TopSection from "../../components/landing/TopSection";
import Navbar from "./../../components/landing/Navbar";

const Home = () => {
  return (
    <div className="w-full h-full bg-black">
      <Navbar />
      <div className="bg-[#2c9bf689]">
        <TopSection />
      </div>
    </div>
  );
};

export default Home;
