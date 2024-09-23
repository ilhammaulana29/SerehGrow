/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../components/HeroSection";
import ProductPageImage from "../assets/images/product-page-image.png";

const ProductPage = () => {
  return (
    <>
    <HeroSection
      heroSectionImage={ProductPageImage}
      text={
        <>
          Produk Mengandung Geraniol Dan Minyak Atsiri
          <br />
          Kualitas Sereh Wangi Terbaik
          <br />
          Untuk Kesehantan Dan Kecantikan Alami
        </>
      }
      showButton1={true}
      buttonText1="Selengkapnya"
    />
    <div className="">
      <p>

      </p>
      <div className="">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="">
          <p>
            
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;
