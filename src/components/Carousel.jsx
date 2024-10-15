import React, { useState, useEffect } from "react";
import Card from "./Card";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";
import Furnace from "../assets/images/furnace.png";
import img1 from "../assets/imageGalery/1.jpeg";
import img2 from "../assets/imageGalery/15.jpeg";
import img3 from "../assets/imageGalery/9.jpeg";
import img4 from "../assets/imageGalery/4.jpeg";

const Carousel = () => {
  const cardData = [
    {
      cardImage: Furnace,
      textContent: "Tungku Penyulingan",
    },
    {
      cardImage: img1,
      textContent: "Mesin Penyulingan",
    },
    {
      cardImage: img2,
      textContent: "Pengering Daun",
    },
    {
      cardImage: img3,
      textContent: "Pengaduk Minyak",
    },
    {
      cardImage: img4,
      textContent: "Kontainer Minyak",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Jumlah card yang terlihat di layar

  // Fungsi untuk pindah ke card berikutnya
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  // Fungsi untuk pindah ke card sebelumnya
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - visibleCards : prevIndex - 1
    );
  };

  // useEffect untuk otomatis berpindah setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Pindah ke card berikutnya setiap 3 detik
    }, 5000); // 3000 ms = 3 detik

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(interval);
  }, [currentIndex]); // Tambahkan currentIndex sebagai dependency agar efek ini berjalan setiap kali currentIndex berubah

  return (
    <div className="relative z-10 lg:-mt-36 -mt-24">
      {/* Mobile View - Display All Cards */}
      <div className="lg:hidden p-4 flex overflow-x-auto space-x-4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className={`w-52 h-40 flex-shrink-0 bg-white drop-shadow-md rounded-md`}
            cardImage={card.cardImage}
            classNameCardImage={`w-44 h-28 flex-shrink-0`}
            classNameCardText={`text-black text-xs mt-2 font-semibold`}
            textContent={card.textContent}
          />
        ))}
      </div>

      {/* Desktop View - Display 3 Cards with Chevron Navigation */}
      <div className="hidden lg:flex lg:justify-center lg:items-center lg:space-x-3">
        {/* Chevron Left */}
        <div
          className="lg:w-14 lg:h-14 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer"
          onClick={handlePrev}
        >
          <img src={ChevronLeft} alt="Previous" className="w-4 h-7" />
        </div>

        {/* Cards Display */}
        {cardData
          .slice(currentIndex, currentIndex + visibleCards)
          .map((card, index) => (
            <Card
              key={index}
              className={`lg:w-96 lg:h-72 flex-shrink-0 bg-white drop-shadow-xl rounded-xl`}
              cardImage={card.cardImage}
              classNameCardImage={`lg:w-96 lg:h-56 lg:mb-4 mb-0`}
              classNameCardText={`text-center text-black lg:text-base lg:mt-0 font-semibold`}
              textContent={card.textContent}
            />
          ))}

        {/* Chevron Right */}
        <div
          className="lg:w-14 lg:h-14 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer"
          onClick={handleNext}
        >
          <img src={ChevronRight} alt="Next" className="w-4 h-7" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
