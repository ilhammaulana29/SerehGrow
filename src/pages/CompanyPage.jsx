// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import banerPerusahaan from "../assets/images/company-page-image.png";

const CompanyPage = () => {
  return (
    <HeroSection
      heroSectionImage={banerPerusahaan}
      text={
        <>
          PROFIL PERUSAHAAN
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />
  );
};

export default CompanyPage;