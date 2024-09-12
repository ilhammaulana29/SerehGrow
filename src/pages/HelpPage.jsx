// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import HelpPageImage from "../assets/images/help-page-image.png";

const HelpPage = () => {
  return (
    <HeroSection
      heroSectionImage={HelpPageImage}
      text={
        <>
          BUTUH BANTUAN ?
          <br />
          TEMUKAN SOLUSI CEPAT
          <br />
          DAN MUDAH DI PUSAT BANTUAN KAMI
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />
  );
};

export default HelpPage;
