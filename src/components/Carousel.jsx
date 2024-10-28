import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";

const Carousel = () => {
  const [dataImage, setDataImage] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; // Jumlah card yang terlihat di layar

  const fetchDataImage = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/gallery");
      setDataImage(response.data);
    } catch (error) {
      console.error("Error dalam mengambil data gambar: ", error);
    }
  };

  useEffect(() => {
    fetchDataImage();
  }, []);

  // Fungsi untuk pindah ke card berikutnya
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataImage.length - visibleCards ? 0 : prevIndex + 1
    );
  };

  // Fungsi untuk pindah ke card sebelumnya
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataImage.length - visibleCards : prevIndex - 1
    );
  };

  // useEffect untuk otomatis berpindah setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Pindah ke card berikutnya setiap 5 detik
    }, 5000); // 5000 ms = 5 detik

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative z-10 lg:-mt-36 -mt-24">
      {/* Mobile View - Display All Cards */}
      <div className="lg:hidden p-4 flex overflow-x-auto space-x-4">
        {dataImage.slice(0, 5).map((data) => (
          <Card
            key={data.id_gallery}
            className="w-52 h-40 flex-shrink-0 bg-white drop-shadow-md rounded-md"
            cardImage={`http://localhost:8000/storage/image-gallery/${data.gambar}`}
            classNameCardImage="w-44 h-28 flex-shrink-0"
            classNameCardText="text-black text-xs mt-2 font-semibold"
            textContent={data.deskripsi_gambar}
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
        {dataImage
          .slice(currentIndex, currentIndex + visibleCards)
          .map((data) => (
            <Card
              key={data.id_gallery}
              className="lg:w-96 lg:h-72 flex-shrink-0 bg-white drop-shadow-xl rounded-xl"
              cardImage={`http://localhost:8000/storage/image-gallery/${data.gambar}`}
              classNameCardImage="lg:w-96 lg:h-56 lg:mb-4 mb-0"
              classNameCardText="text-center text-black lg:text-base lg:mt-0 font-semibold"
              textContent={data.deskripsi_gambar}
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
