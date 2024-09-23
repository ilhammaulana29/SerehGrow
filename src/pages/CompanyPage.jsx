// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import banerPerusahaan from "../assets/images/company-page-image.png";
import LogoCGI from "../assets/images/Logo-CGI.png";
import Card from "../components/Card";

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
    />
    <div className="px-4 md:px-12 py-8 md:py-10 flex flex-col md:flex-row border-solid border-grey-400">
       <div className="w-full md:w-4/5 mb-8 md:mb-0">
          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-bold text-[#468585]">TENTANG KAMI</p>
          </div>
            <div className="text-lg md:text-xl font-medium pb-4">
              <p>Profil PT Cakrawala Global Informatika</p>
            </div>
             {/* <!-- Mobile Logo --> */}
          <div className="w-full md:w-1/5 flex justify-center lg:hidden items-center mb-6">
             <img src={LogoCGI} alt="Logo CGI" className="w-24 md:w-full md:h-auto object-contain" />
          </div>
          <div className="md:pr-10 text-justify">
             <p>Menjadi mitra teknologi terdepan yang dipercaya oleh banyak perusahaan untuk memajukan bisnis mereka di era digital. Kami percaya bahwa melalui inovasi, kualitas layanan, dan keahlian teknis, kami dapat memberikan kontribusi yang signifikan bagi kemajuan teknologi dan bisnis di Indonesia.</p>
          </div>
          <div className="md:pr-10 pt-6 md:pt-10 text-justify">
             <p>Kami menawarkan berbagai layanan, mulai dari konsultasi IT, pengembangan perangkat lunak, integrasi sistem, hingga dukungan teknis. Dengan pendekatan yang berbasis pada kebutuhan pelanggan, kami memastikan setiap solusi yang kami tawarkan disesuaikan untuk memenuhi tujuan spesifik dan tantangan unik dari setiap klien.</p>
          </div>
        </div>
          {/* <!-- Desktop Logo --> */}
          <div className="lg:w-1/5 hidden lg:flex lg:justify-center items-center">
            <img src={LogoCGI} alt="Logo CGI" className="lg:w-60 lg:h-60 object-contain" />
          </div>
    </div>


    <div className="flex grid-cols-2">
       <div className="basis-2/5">
      <img
          src="/public/icon-corporation.png"
          alt="Sereh Wangi"
          className="w-50 "
        />
      </div> 
      <div className="basis-3/5">
      <div className="">
          <p className="text-3xl font-bold text-[#468585]">Visi dan Misi</p>
        </div>
        <div className="text-xl font-medium pb-4">
          <p>Visi :</p>
        </div>
        <div className="pr-20">
          <p>PT Cakrawala Global Informatika adalah perusahaan yang  bergerak di bidang teknologi informasi dan layanan yang berdedikasi untuk untuk memberikan solusi inovatif dan terpercaya bagi berbagai kebutuhan bisnis.</p>
        </div>
        <div className="text-xl font-medium py-4">
          <p>Misi :</p>
        </div>
        <div className="pr-20">
          <p>PT Cakrawala Global Informatika adalah perusahaan yang  bergerak di bidang teknologi informasi dan layanan yang berdedikasi untuk untuk memberikan solusi inovatif dan terpercaya bagi berbagai kebutuhan bisnis.</p>
        </div>
      </div>
    </div>


    <div className="flex justify-around items-center text-3xl font-bold text-[#196A6A]">
      <p>Jelajahi Berita Terbaru Dunia Pertanian</p>
    </div>
    <div className="flex justify-center items-center py-10 space-x-5">
      {/* Card 1 */}
      <Card
        className="bg-white shadow-md rounded-lg w-72"
        classNameCardImage="w-full h-32 object-cover rounded-t-lg"
        cardImage="https://via.placeholder.com/150"
        classNameCardText="text-lg font-bold text-gray-700 mt-4"
        textContent="Kartu 1"
      />
      
      {/* Card 2 */}
      <Card
        className="bg-white shadow-md rounded-lg w-72"
        classNameCardImage="w-full h-32 object-cover rounded-t-lg"
        cardImage="https://via.placeholder.com/150"
        classNameCardText="text-lg font-bold text-gray-700 mt-4"
        textContent="Kartu 2"
      />

      {/* Card 3 */}
      <Card
        className="bg-white shadow-md rounded-lg w-72"
        classNameCardImage="w-full h-32 object-cover rounded-t-lg"
        cardImage="https://via.placeholder.com/150"
        classNameCardText="text-lg font-bold text-gray-700 mt-4"
        textContent="Kartu 3"
      />
    </div>

    </>
  );
};

export default CompanyPage;
