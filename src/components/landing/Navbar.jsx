import React from "react";
const imageData = [
  { id: 1, src: "/assets/Navigation Bar/Vector.png" },
  { id: 2, src: "/assets/Navigation Bar/L.png" },
  { id: 3, src: "/assets/Navigation Bar/y.png" },
  { id: 4, src: "/assets/Navigation Bar/N.png" },
  { id: 5, src: "/assets/Navigation Bar/X.png" },
  { id: 6, src: "/assets/Navigation Bar/C.png" },
  { id: 7, src: "/assets/Navigation Bar/X1.png" },
];
const sections = [
  { id: 1, section: "Home" },
  { id: 2, section: "Our Story" },
  { id: 3, section: "Contact Us" },
  { id: 4, section: "Careers" },
];
const Navbar = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute py-2 bg-[#090B11] flex justify-between lg:px-8 items-center w-full">
        <div className="flex justify-around items-center w-1/2">
          <div className="flex justify-around items-center w-30">
            {imageData.map((el, i) => {
              return <img src={el.src} alt="logo" className="" />;
            })}
          </div>
          <div className="">
            {sections.map((el, i) => {
              return (
                <span
                  key={i}
                  className="text-[#A7AEBF] lg:mx-4 cursor-pointer hover:text-[#2C9BF6] transition-all ease-in-out duration-500"
                >
                  {el.section}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <button className="bg-[#2C9BF6] py-2 px-4 rounded-lg text-[#16171D] font-bold hover:text-white transition-all ease-in-out duration-500">
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
