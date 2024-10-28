import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import GaleryPageImage from "../assets/images/galery-page-image.png";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";
import SearchIcon from "../assets/images/search.png";
import axios from "axios";

const GaleryPage = () => {
  const [galleries, setGalleries] = useState([]);
  const { category } = useParams();

  // Fungsi untuk mengambil data galeri dari API berdasarkan kategori
  const fetchGalleries = async () => {
    try {
      let url = "http://localhost:8000/api/gallery";

      if (category && category !== "Semua") {
        const categoryMap = {
          Sereh: 1,
          Pabrik: 2,
          Produk: 3,
          Lainnya: 4,
        };

        const categoryId = categoryMap[category];
        if (categoryId) {
          url += `?id_kategori=${categoryId}`;
        }
      }

      const response = await axios.get(url);
      setGalleries(response.data);
    } catch (error) {
      console.error("Error dalam mengambil data galeri: ", error);
    }
  };

  useEffect(() => {
    fetchGalleries();
  }, [category]);

  const [hoveredImageId, setHoveredImageId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % galleries.length;
    setSelectedImage(galleries[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + galleries.length) % galleries.length;
    setSelectedImage(galleries[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <HeroSection
        heroSectionImage={GaleryPageImage}
        text={
          <>
            Jelajahi keindahan proses budidaya
            <br />
            Sereh Wangi:
            <br />
            Dari bibit unggul hingga
            <br />
            panen berkualitas
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
        scrollTarget1="#galeri"
      />

      <div className="container mx-auto px-4 mb-20">
        <div className="flex justify-center space-x-4 my-4" id="galeri">
          {["Semua", "Sereh", "Pabrik", "Produk", "Lainnya"].map((item) => (
            <Link
              key={item}
              to={`/galeri/${item}`}
              className={`btn p-3 rounded-lg text-white font-medium hover:bg-greenPrimer ${
                category === item || (!category && item === "Semua")
                  ? "bg-greenPrimer"
                  : "bg-green2"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {galleries.map((gallery, index) => (
            <div
              key={gallery.id_galeri}
              className="relative group"
              onMouseEnter={() => setHoveredImageId(gallery.id_galeri)}
              onMouseLeave={() => setHoveredImageId(null)}
              onClick={() => handleImageClick(gallery, index)}
            >
              <img
                src={`http://localhost:8000/storage/image-gallery/${gallery.gambar}`}
                alt={gallery.deskripsi_gambar}
                className="w-full h-auto cursor-pointer"
                loading="lazy"
              />
              {hoveredImageId === gallery.id_galeri && (
                <div className="bg-green2 hidden lg:flex justify-center items-center p-5 absolute inset-x-0 bottom-0 opacity-80 h-20 transition-opacity duration-300">
                  <p className="text-white font-medium text-lg hover:cursor-pointer">
                    Klik untuk info selengkapnya
                  </p>
                  <img src={SearchIcon} alt="search icon" className="ml-2" />
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={handleCloseModal}
          >
            <div className="relative flex flex-col items-center max-w-screen-lg mx-auto">
              <div
                className="absolute left-[-150px] top-1/2 transform -translate-y-1/2 lg:w-14 lg:h-14 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer"
                onClick={handlePrev}
              >
                <img src={ChevronLeft} alt="Previous" className="w-4 h-7" />
              </div>

              <img
                src={`http://localhost:8000/storage/image-gallery/${selectedImage.gambar}`}
                alt={selectedImage.deskripsi_gambar}
                className="max-w-full max-h-[80vh] object-contain"
              />

              <div className="bg-white w-full p-5 text-center">
                <p className="text-lg">{selectedImage.deskripsi_gambar}</p>
              </div>

              <div
                className="absolute right-[-150px] top-1/2 transform -translate-y-1/2 lg:w-14 lg:h-14 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer"
                onClick={handleNext}
              >
                <img src={ChevronRight} alt="Next" className="w-4 h-7" />
              </div>
            </div>

            <button
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default GaleryPage;
