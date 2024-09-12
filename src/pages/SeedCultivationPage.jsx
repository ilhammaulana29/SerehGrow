// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";

const SeedCultivationPage = () => {
  return (
    <HeroSection
      heroSectionImage={CultivationPageImage}
      text={
        <>
          RAIH HASIL OPTIMAL DARI BUDIDAYA
          <br />
          SEREH WANGI :
          <br />
          IKUTI LANGKAH DARI PERSIAPAN LAHAN
          <br />
          HINGGA PENYULINGAN TERBAIK
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />  )
}

export default SeedCultivationPage