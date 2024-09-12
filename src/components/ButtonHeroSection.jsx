// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ButtonHeroSection = ({ children, className }) => {
  return (
    <button
      className={`bg-greenPrimer hover:bg-green1 text-white font-semibold rounded-md h-5 px-2 text-[8px] lg:h-auto lg:p-3 lg:text-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonHeroSection;
