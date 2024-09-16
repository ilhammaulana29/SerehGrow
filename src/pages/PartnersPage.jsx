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
          Beberapa Lembaga Yang
          <br />
          Bekerjasama Dengan PT kami
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />  )
}

export default PartnersPage;