import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import HeroSection from "../components/HeroSection";
import PartnersPageImage from "../assets/images/partners-page-image.png";
import LogoCGI from "../assets/images/Logo-CGI.png";
import Card from "../components/Card";

const CompanyProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const governmentPartners = [
    { id: 1, name: "Lembaga Pemerintah 1", logo: LogoCGI },
    { id: 2, name: "Lembaga Pemerintah 2", logo: "/path_to_gov_logo_2.png" },
    { id: 3, name: "Lembaga Pemerintah 3", logo: "/path_to_gov_logo_3.png" },
    { id: 4, name: "Lembaga Pemerintah 4", logo: "/path_to_gov_logo_4.png" },
    { id: 5, name: "Lembaga Pemerintah 5", logo: "/path_to_gov_logo_5.png" },
    { id: 6, name: "Lembaga Pemerintah 6", logo: "/path_to_gov_logo_6.png" },
    { id: 7, name: "Lembaga Pemerintah 7", logo: "/path_to_gov_logo_7.png" },
    { id: 8, name: "Lembaga Pemerintah 8", logo: "/path_to_gov_logo_8.png" },
  ];

  const generalPartners = [
    { id: 1, name: "Mitra Umum 1", logo: LogoCGI },
    { id: 2, name: "Mitra Umum 2", logo: "/path_to_general_logo_2.png" },
    { id: 3, name: "Mitra Umum 3", logo: "/path_to_general_logo_3.png" },
    { id: 4, name: "Mitra Umum 4", logo: "/path_to_general_logo_4.png" },
    { id: 5, name: "Mitra Umum 5", logo: "/path_to_general_logo_5.png" },
    { id: 6, name: "Mitra Umum 6", logo: "/path_to_general_logo_6.png" },
    { id: 7, name: "Mitra Umum 7", logo: "/path_to_general_logo_7.png" },
    { id: 8, name: "Mitra Umum 8", logo: "/path_to_general_logo_8.png" },
  ];

  const allImages = [...governmentPartners, ...generalPartners];

  const openModal = (index) => {
    setSelectedImage(allImages[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = allImages.length - 1;
    if (newIndex >= allImages.length) newIndex = 0;
    setSelectedImage(allImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const PartnerSection = ({ title, partners }) => (
    <div className="partners-section mb-12">
      <h2 className="px-12 text-2xl font-bold text-gray-800 border-b-2 border-gray-200 pb-2 mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <div key={partner.id} className="flex justify-center items-center">
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-24 object-contain cursor-pointer"
              onClick={() =>
                openModal(
                  index +
                    (title === "Mitra Umum" ? governmentPartners.length : 0)
                )
              }
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <HeroSection
        heroSectionImage={PartnersPageImage} 
        text={
          <>
            Beberapa Lembaga Yang
            <br />
            Bekerjasama Dengan PT kami
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
      />
      <div className="px-4 md:px-12 py-8 md:py-10 flex flex-col md:flex-row border-solid border-grey-400">
        <div className="w-full md:w-4/5 mb-8 md:mb-0">
          <div className="mb-4">
            <p className="text-2xl md:text-3xl font-bold text-[#468585]">
              MITRA KAMI
            </p>
          </div>
          <div className="text-lg md:text-xl font-medium pb-4">
            <p>Profil PT Cakrawala Global Informatika</p>
          </div>
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
        <div className="lg:w-1/5 hidden lg:flex lg:justify-center items-center">
          <img
            src={LogoCGI}
            alt="Logo CGI"
            className="lg:w-60 lg:h-60 object-contain"
          />
        </div>
      </div>

      <PartnerSection
        title="Lembaga Pemerintah"
        partners={governmentPartners}
      />
      <PartnerSection title="Mitra Umum" partners={generalPartners} />

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="max-w-3xl w-full h-[90vh] flex flex-col bg-white rounded-lg overflow-hidden">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-4 bg-[#196A6A] text-white">
              <h3 className="text-xl font-semibold">{selectedImage.name}</h3>
              <button
                onClick={closeModal}
                className="text-white hover:bg-[#0D4D4D] rounded-full p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-grow overflow-y-auto p-4">
              <img
                src={selectedImage.logo}
                alt={selectedImage.name}
                className="w-full max-w-96 h-auto object-contain mb-4 mx-auto"
              />
              <p className="text-lg text-center px-4 py-2">
                PT Cakrawala Global Informatika Menjadi mitra teknologi terdepan
                yang dipercaya oleh banyak perusahaan untuk memajukan bisnis
                mereka di era digital. Kami percaya bahwa melalui inovasi,
                kualitas layanan, dan keahlian teknis, kami dapat memberikan
                kontribusi yang signifikan bagi kemajuan teknologi dan bisnis di
                Indonesia.
              </p>
            </div>

            {/* Footer with navigation buttons */}
            <div className="flex justify-between items-center p-4 bg-[#196A6A]">
              <button
                onClick={() => navigate(-1)}
                className="text-white hover:bg-[#0D4D4D] rounded-full p-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigate(1)}
                className="text-white hover:bg-[#0D4D4D] rounded-full p-2"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

<div className="flex justify-around items-center text-3xl font-bold text-[#196A6A] px-4 sm:px-8 lg:px-12">
  <p>Jelajahi Berita Terbaru Dunia Pertanian</p>
</div>

      <div className="flex justify-center items-center py-10 space-x-5">
        <Card
          className="bg-white shadow-md rounded-lg w-72"
          classNameCardImage="w-full h-32 object-cover rounded-t-lg"
          cardImage="https://via.placeholder.com/150"
          classNameCardText="text-lg font-bold text-gray-700 mt-4"
          textContent="Kartu 1"
        />
        <Card
          className="bg-white shadow-md rounded-lg w-72"
          classNameCardImage="w-full h-32 object-cover rounded-t-lg"
          cardImage="https://via.placeholder.com/150"
          classNameCardText="text-lg font-bold text-gray-700 mt-4"
          textContent="Kartu 2"
        />
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

export default CompanyProfile;
