// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../components/Button";

// eslint-disable-next-line react/prop-types
const HeroSection = ({ heroSectionImage, text, showButton1, showButton2, buttonText1, buttonText2, scrollTarget1, scrollTarget2 }) => {
  const handleButtonClick = (target) => {
    if (target.startsWith("#")) {
      // Jika target adalah ID, scroll ke elemen tersebut
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Jika target adalah URL, alihkan ke halaman lain
      window.location.href = target;
    }
  };

  return (
    <div className="relative w-full h-auto z-0">
      {/* Wrapper untuk gambar dan overlay */}
      <div className="relative w-full h-auto">
        {/* Gambar */}
        <img src={heroSectionImage} alt="" className="w-96 h-96 lg:w-[1440px] lg:h-[696px]" />

        {/* Overlay hitam dengan opacity */}
        <div className="absolute inset-0 bg-black opacity-60 z-8"></div>
      </div>

      {/* Teks di atas overlay dan gambar */}
      <div className="absolute top-16 left-12 md:top-56 md:left-12 text-white text-xl md:text-5xl font-bold">
        <p className="">{text}</p>
      </div>

      {/* Tombol-tombol ditampilkan sesuai dengan showButton1 dan showButton2 */}
      <div className="absolute my-16 top-40 left-12 lg:top-96 lg:left-12 flex space-x-4">
        {showButton1 && (
          <Button
            onClick={() => handleButtonClick(scrollTarget1)}
            className="bg-greenPrimer hover:bg-green1 text-white font-semibold rounded-md h-7 px-2 text-[13px] lg:h-auto lg:p-3 lg:text-xl"
          >
            {buttonText1}
          </Button>
        )}
        {showButton2 && (
          <Button
            onClick={() => handleButtonClick(scrollTarget2)}
            className="bg-transparent hover:text-greenPrimer hover:cursor-pointer hover:bg-white border-2 lg:p-2 h-7 lg:h-auto px-2 text-white font-semibold text-[13px] lg:text-xl rounded-md"
          >
            {buttonText2}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
