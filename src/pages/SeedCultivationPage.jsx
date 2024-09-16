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
          Raih Hasil Optimal Dari Budidaya
          <br />
          Sereh Wangi :
          <br />
          Ikuti langkah Dari Persiapan Lahan
          <br />
          Hingga Penyulingan Terbaik
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />  )
}

export default SeedCultivationPage