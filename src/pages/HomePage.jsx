// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import HomePageImage from "../assets/images/home-page-image.png";
import LemonGrass from "../assets/images/lemongrass-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";

const HomePage = () => {
  return (
    <>
      <HeroSection
        heroSectionImage={HomePageImage}
        text={
          <>
            Tumbuhkan Potensi Hasilkan
            <br />
            Kualitas : <br />
            Budidaya Sereh Wangi <br />
            Terintegrasi
          </>
        }
        showButton1={true}
        showButton2={true}
        buttonText1="Selengkapnya"
        buttonText2="Apa Itu Sereh Wangi ?"
        scrollTarget1="#alurbudidaya"
        scrollTarget2="#serehwangi"
      />

      {/* Bagian Cards */}
      <Carousel />

      <div
        className="flex flex-col-reverse lg:flex-row mx-auto w-full pt-10 lg:pt-28 px-4 lg:px-12 space-y-6 lg:space-y-0 lg:space-x-6"
        id="serehwangi"
      >
        {/* left side : text */}
        <div className="flex-1 lg:basis-5/12">
          <h2 className="text-green1 text-3xl font-bold text-center lg:text-left mt-3 lg:mt-0">
            Apa Itu Sereh Wangi ?
          </h2>
          <p className="mt-4 text-gray-700 text-lg text-justify">
            Serehwangi, atau lebih dikenal dengan nama ilmiah Cymbopogon nardus,
            adalah jenis tanaman rumput yang terkenal karena menghasilkan minyak
            atsiri berkualitas tinggi, yang dikenal dengan nama minyak serai
            wangi atau citronella oil. Tanaman ini memiliki aroma segar yang
            khas, mirip dengan lemon, dan telah lama digunakan dalam berbagai
            aplikasi, mulai dari pengusir serangga alami, bahan baku industri
            kosmetik dan parfum, hingga pengobatan tradisional. Serehwangi
            merupakan tanaman yang mudah dibudidayakan, terutama di daerah
            tropis seperti Indonesia. Selain memberikan nilai ekonomi yang
            tinggi melalui produksi minyak atsiri, serehwangi juga memiliki
            manfaat ekologis.
          </p>
        </div>
        {/* right side : image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <img
              src={LemonGrass}
              alt="Sereh Wangi"
              className="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Bagian Alur Budidaya Sereh Wangi */}
      <CultivationFlow />
    </>
  );
};

export default HomePage;
