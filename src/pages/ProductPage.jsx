/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../components/HeroSection";
import ProductPageImage from "../assets/images/product-page-image.png";

const ProductPage = () => {
  return (
    <HeroSection
      heroSectionImage={ProductPageImage}
      text={
        <>
          PRODUK MENGANDUNG GERANIOL DAN MINYAK ATSIRI :
          <br />
          KUALITAS SEREH WANGI TERBAIK
          <br />
          UNTUK KESEHATAN DAN KECANTIKAN ALAMI
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />
  );
};

export default ProductPage;
