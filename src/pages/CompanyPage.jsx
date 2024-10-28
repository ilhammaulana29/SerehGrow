import React from "react";
import HeroSection from "../components/HeroSection";
import banerPerusahaan from "../assets/images/company-page-image.png";
import LogoCGI from "../assets/images/Logo-CGI.png";
import iconCorporation from "/public/icon-corporation.png";
import Card from "../components/Card";
import News from "../components/News";

const CompanyPage = () => {
  return (
    <>
      <HeroSection
        heroSectionImage={banerPerusahaan}
        text={
          <>
            Profil Perusahaan
            <br />
            PT Cakrawala Global Informatika
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
        scrollTarget1="#profil"
      />
      <div className="px-4 md:px-12 py-8 md:py-10 flex flex-col md:flex-row border-solid border-grey-400" id="profil">
        <div className="w-full md:w-4/5 mb-8 md:mb-0">
          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-bold text-[#468585]">
              TENTANG KAMI
            </p>
          </div>
          <div className="text-lg md:text-xl font-medium pb-4">
            <p>Profil PT Cakrawala Global Informatika</p>
          </div>
          {/* Mobile Logo */}
          <div className="w-full md:w-1/5 flex justify-center lg:hidden items-center mb-6">
            <img
              src={LogoCGI}
              alt="Logo CGI"
              className="w-24 md:w-full md:h-auto object-contain"
            />
          </div>
          <div className="md:pr-10 text-justify">
            <p>
              Menjadi mitra teknologi terdepan yang dipercaya oleh banyak
              perusahaan untuk memajukan bisnis mereka di era digital. Kami
              percaya bahwa melalui inovasi, kualitas layanan, dan keahlian
              teknis, kami dapat memberikan kontribusi yang signifikan bagi
              kemajuan teknologi dan bisnis di Indonesia.
            </p>
          </div>
          <div className="md:pr-10 pt-6 md:pt-10 text-justify">
            <p>
              Kami menawarkan berbagai layanan, mulai dari konsultasi IT,
              pengembangan perangkat lunak, integrasi sistem, hingga dukungan
              teknis. Dengan pendekatan yang berbasis pada kebutuhan pelanggan,
              kami memastikan setiap solusi yang kami tawarkan disesuaikan untuk
              memenuhi tujuan spesifik dan tantangan unik dari setiap klien.
            </p>
          </div>
        </div>
        {/* Desktop Logo */}
        <div className="lg:w-1/5 hidden lg:flex lg:justify-center items-center">
          <img
            src={LogoCGI}
            alt="Logo CGI"
            className="lg:w-60 lg:h-60 object-contain"
          />
        </div>
      </div>

      <div className="px-4 md:px-12 py-8 md:py-10 flex flex-col md:flex-row border-solid border-grey-400">
        {/* Desktop Icon */}
        <div className="md:w-1/5 hidden md:flex md:justify-center items-center mb-6 md:mb-0">
          <img
            src={iconCorporation}
            alt="Icon Corporation"
            className="w-60 h-60 object-contain"
          />
        </div>
        <div className="w-full md:w-4/5">
          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-bold text-[#468585]">
              VISI DAN MISI
            </p>
          </div>
          {/* Mobile Icon */}
          <div className="md:hidden flex justify-center items-center mb-6">
            <img
              src={iconCorporation}
              alt="Icon Corporation"
              className="w-34 h-34 object-contain"
            />
          </div>
          <div className="text-lg md:text-xl font-medium pb-4">
            <p>Visi :</p>
          </div>
          <div className="md:pr-10 text-justify">
            <p>
              PT Cakrawala Global Informatika adalah perusahaan yang bergerak di
              bidang teknologi informasi dan layanan yang berdedikasi untuk
              untuk memberikan solusi inovatif dan terpercaya bagi berbagai
              kebutuhan bisnis.
            </p>
          </div>
          <div className="text-lg md:text-xl font-medium py-4">
            <p>Misi :</p>
          </div>
          <div className="md:pr-10 text-justify">
            <p>
              PT Cakrawala Global Informatika adalah perusahaan yang bergerak di
              bidang teknologi informasi dan layanan yang berdedikasi untuk
              untuk memberikan solusi inovatif dan terpercaya bagi berbagai
              kebutuhan bisnis.
            </p>
          </div>
        </div>
      </div>

      <News />
    </>
  );
};

export default CompanyPage;