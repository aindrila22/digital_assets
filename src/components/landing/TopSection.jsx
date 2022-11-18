import React from "react";

const TopSection = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] pt-20 bg-gradient-to-l from-transparent via-[#151927] to-[#000000]">
      <div className="flex items-start justify-center w-full ">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-3/4 flex items-start justify-center flex-col pt-40">
            <span className="text-white text-5xl font-extrabold text-left leading-normal">
              Best Place to <b className="text-[#2C9BF6]">Buy & Sell</b> Digital
              Assets
            </span>
            <span className="text-[#A7AEBF] text-left py-10 text-xl">
              Join our waitlist for an early sign-up bonus!
            </span>
            <div className="flex items-start justify-start w-full gap-x-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#151927] border-[#A7AEBF] border rounded p-3 text-[#2C9BF6] w-1/2 outline-none"
              />
              <button className="bg-[#2C9BF6] py-2 px-4 rounded-lg text-[#16171D] font-bold hover:text-white transition-all ease-in-out duration-500">
                SignIn
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="mt-16 ml-16">
            <img src="/assets/topsection/Spot Trading 1.png" />
          </div>
          <div className="absolute top-52">
            <img src="/assets/topsection/BG Dark.png" />
          </div>
          <div className="absolute top-80 top lg:right-28 xl:right-[18%] border border-[#A7AEBF] rounded-md">
            <img src="/assets/topsection/1862 1.png" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
