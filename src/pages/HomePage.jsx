// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import HomePageImage from "../assets/images/home-page-image.png";
import LemonGrass from "../assets/images/lemongrass-image.png";
import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <>
      <HeroSection
        heroSectionImage={HomePageImage}
        text={
          <>
            TUMBUHKAN POTENSI HASILKAN
            <br />
            KUALITAS : <br />
            BUDIDAYA SEREH WANGI <br />
            TERINTEGRASI
          </>
        }
        showButton1={true}
        showButton2={true}
        buttonText1="Selengkapnya"
        buttonText2="Apa Itu Sereh Wangi ?"
      />

      {/* Bagian Cards */}
      <Cards />

      <div className="flex mx-auto w-full pt-20 pb-10 px-12 space-x-6">
        {/* left side : text */}
        <div className="flex-1 basis-5/12">
          <h2 className="text-green1 text-3xl font-bold">
            APA ITU SEREH WANGI ?{" "}
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
            manfaat ekologis
          </p>
        </div>
        {/* right side : image */}
        <div className="flex-1">
          <div className="w-96 h-96 rounded-full">
            <img
              src={LemonGrass}
              alt="Sereh Wangi"
              className="w-96 h-96 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
