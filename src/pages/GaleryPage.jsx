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
          Jelajahi Keindahan Proses Budidaya
          <br />
          Sereh Wangi :
          <br />
          Dari Bibit Unggul Hingga Panen Berkualitas
          <br />
          Dari Setiap Foto
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />
  );
};

export default GaleryPage;
