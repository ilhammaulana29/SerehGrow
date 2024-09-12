// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import ContentPageImage from "../assets/images/content-page-image.png";

const ContentsPage = () => {
  return (
    <HeroSection
      heroSectionImage={ContentPageImage}
      text={
        <>
          BACA BEBERAPA KONTEN ARTIKEL KAMI
          <br />
          UNTUK MENDAPAT INFORMASI
          <br />
          SEPUTAR SEREH WANGI
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />
  );
};

export default ContentsPage;
