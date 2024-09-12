// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import HomePageImage from "../assets/images/home-page-image.png";

const HomePage = () => {
  return (
    <HeroSection
      heroSectionImage={HomePageImage}
      text={
        <>
          TUMBUHKAN POTENSI HASILKAN
          <br />
          KUALITAS : <br />
          BUDIDAYA SEREH WANGI <br />
          TERINTEGRASI
        </>
      }
      showButton1={true}
      showButton2={true}
      buttonText1="Selengkapnya"
      buttonText2="Apa Itu Sereh Wangi ?"
    />
  );
};

export default HomePage;
