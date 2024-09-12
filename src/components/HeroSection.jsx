// eslint-disable-next-line no-unused-vars
import React from "react";
import ButtonBaner from "../components/ButtonHeroSection";
import Button from "../components/Button";

// eslint-disable-next-line react/prop-types
const HeroSection = ({ heroSectionImage, text, showButton1, showButton2, buttonText1, buttonText2 }) => {
  return (
    <div className="relative w-full h-auto z-0">
      {/* Wrapper untuk gambar dan overlay */}
      <div className="relative w-full h-auto">
        {/* Gambar */}
        <img src={heroSectionImage} alt="" className="w-[1440px] h-[696px]" />

        {/* Overlay hitam dengan opacity */}
        <div className="absolute inset-0 bg-black opacity-60 z-8"></div>
      </div>

      {/* Teks di atas overlay dan gambar */}
      <div className="absolute top-16 left-12 md:top-56 md:left-12 text-white text-xs md:text-5xl font-bold">
        <p className="">{text}</p>
      </div>

      {/* Tombol-tombol ditampilkan sesuai dengan showButton1 dan showButton2 */}
      <div className="absolute my-16 top-20 left-12 lg:top-96 lg:left-12 flex space-x-4">
        {showButton1 && (
          <ButtonBaner>{buttonText1}</ButtonBaner>
        )}
        {showButton2 && (
          <Button className="bg-transparent hover:text-greenPrimer hover:bg-white border-2 lg:p-2 h-5 lg:h-auto px-2 text-white font-semibold text-[8px] lg:text-xl rounded-md">
            {buttonText2}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
