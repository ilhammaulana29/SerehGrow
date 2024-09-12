// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "../components/Card";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";

const Cards = () => {
  return (
    <div className="relative z-10 -mt-36 flex justify-center items-center space-x-6">
      <div className="w-14 h-14 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
        <img src={ChevronLeft} alt="" className="w-4 h-7" />
      </div>
      <Card />
      <Card />
      <Card />
      <div className="w-14 h-14 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
        <img src={ChevronRight} alt="" className="w-4 h-7" />
      </div>
    </div>
  );
};

export default Cards;
