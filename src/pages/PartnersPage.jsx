// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from "../components/HeroSection";
import PartnersPageImage from "../assets/images/partners-page-image.png";

const PartnersPage = () => {
  return (
    <HeroSection
      heroSectionImage={PartnersPageImage}
      text={
        <>
          MITRA KAMI
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />  )
}

export default PartnersPage;