import React from "react";
import HeroSection from "../components/HeroSection";
import ContentPageImage from "../assets/images/content-page-image.png";
import img1 from "../assets/imageGalery/15.jpeg";
import img2 from "../assets/imageGalery/1.jpeg";
import Content from "../components/Content";
import News from "../components/News";

const ContentsPage = () => {
  return (
    <>
      <HeroSection
        heroSectionImage={ContentPageImage}
        text={
          <>
            Baca beberapa konten artikel kami
            <br />
            untuk mendapat informasi
            <br />
            seputar Sereh Wangi
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
      />

      <div className="lg:px-12 px-4 py-8">
        <p className="text-xl font-medium mb-4">Resource</p>

        {/* Layout grid untuk artikel utama dan terbaru */}
        <div className="lg:px-12 px-2 flex flex-col lg:grid lg:grid-cols-12 gap-4">
          {/* Artikel utama */}
          <Content
            containerClass="lg:col-span-8 flex flex-col-reverse lg:flex-row shadow-lg p-4"
            textContainerClass="flex flex-col justify-between lg:w-7/12 pr-4"
            headingClass="font-semibold text-3xl leading-snug mb-4"
            headingText="Perbandingan bibit serai wangi tipe mahapengiri dan lenabatu"
            dateClass="text-xl font-medium"
            dateText="20 September 2024"
            imageContainerClass="lg:w-5/12"
            imageClass="lg:w-96 lg:h-96 w-full h-56 object-cover"
            imageSrc={img1}
          />

          {/* Artikel rekomendasi */}
          <div className="lg:col-span-4 flex lg:flex-col overflow-x-auto">
            <Content
              containerClass="flex flex-col-reverse lg:flex-row mb-4 shadow-md p-3"
              textContainerClass="lg:w-7/12 pr-4"
              headingClass="text-md font-bold leading-tight mb-2"
              headingText="Cara membudidayakan Serai dengan baik"
              dateClass="text-sm font-mediu"
              dateText="20 September 2024"
              imageContainerClass="lg:w-5/12"
              imageClass="w-full h-24 object-cover"
              imageSrc={img1}
            />
            <Content
              containerClass="flex flex-col-reverse lg:flex-row mb-4 shadow-md p-3"
              textContainerClass="lg:w-7/12 pr-4"
              headingClass="text-md font-bold leading-tight mb-2"
              headingText="Cara membudidayakan Serai dengan baik"
              dateClass="text-sm font-medium"
              dateText="20 September 2024"
              imageContainerClass="lg:w-5/12"
              imageClass="w-full h-24 object-cover"
              imageSrc={img1}
            />
            <Content
              containerClass="flex flex-col-reverse lg:flex-row mb-4 shadow-md p-3"
              textContainerClass="lg:w-7/12 pr-4"
              headingClass="text-md font-bold leading-tight mb-2"
              headingText="Cara membudidayakan Serai dengan baik"
              dateClass="text-sm font-medium"
              dateText="20 September 2024"
              imageContainerClass="lg:w-5/12"
              imageClass="w-full h-24 object-cover"
              imageSrc={img1}
            />
          </div>
        </div>

        <div className="mt-12">
          <div className="inline-block mb-4 lg:px-12">
            <h3 className="text-2xl text-slate-800 font-bold">Terbaru</h3>
            <hr className="border-t-4 border-green2" />
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col-reverse gap-5">
            <div className="col-span-8">
              <Content
                containerClass="flex flex-col-reverse lg:flex-row-reverse mb-4 shadow-md p-3 gap-6"
                textContainerClass="lg:w-7/12 flex flex-col justify-between pr-4"
                headingClass="text-xl font-bold leading-tight mb-2"
                headingText="Cara membudidayakan Serai dengan baik"
                dateClass="text-sm font-medium"
                dateText="20 September 2024"
                imageContainerClass="lg:w-5/12"
                imageClass="w-full h-48 object-cover"
                imageSrc={img1}
              />
              <Content
                containerClass="flex flex-col-reverse lg:flex-row-reverse mb-4 shadow-md p-3 gap-6"
                textContainerClass="lg:w-7/12 flex flex-col justify-between pr-4"
                headingClass="text-xl font-bold leading-tight mb-2"
                headingText="Cara membudidayakan Serai dengan baik"
                dateClass="text-sm font-medium"
                dateText="20 September 2024"
                imageContainerClass="lg:w-5/12"
                imageClass="w-full h-48 object-cover"
                imageSrc={img1}
              />
              <Content
                containerClass="flex flex-col-reverse lg:flex-row-reverse mb-4 shadow-md p-3 gap-6"
                textContainerClass="lg:w-7/12 flex flex-col justify-between pr-4"
                headingClass="text-xl font-bold leading-tight mb-2"
                headingText="Cara membudidayakan Serai dengan baik"
                dateClass="text-sm font-medium"
                dateText="20 September 2024"
                imageContainerClass="lg:w-5/12"
                imageClass="w-full h-48 object-cover"
                imageSrc={img1}
              />
            </div>

            <div className="col-span-4 bg-slate-200">
              <div className="advertisement">IKLAN</div>
            </div>
          </div>
        </div>
      </div>
      <News />
    </>
  );
};

export default ContentsPage;
