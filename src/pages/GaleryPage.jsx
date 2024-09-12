// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import GaleryPageImage from "../assets/images/galery-page-image.png";

const GaleryPage = () => {
  return (
    <HeroSection
      heroSectionImage={GaleryPageImage}
      text={
        <>
          JELAJAHI KEINDAHAN PROSES BUDIDAYA
          <br />
          SEREH WANGI :
          <br />
          DARI BIBIT UNGGUL HINGGA PANEN BERKUALITAS
          <br />
          DARI SETIAP FOTO
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />
  );
};

export default GaleryPage;
