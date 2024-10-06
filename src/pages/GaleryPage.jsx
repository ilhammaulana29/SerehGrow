import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import GaleryPageImage from "../assets/images/galery-page-image.png";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";
import SearchIcon from "../assets/images/search.png";
import img1 from "../assets/imageGalery/1.jpeg";
import img2 from "../assets/imageGalery/2.jpeg";
import img3 from "../assets/imageGalery/3.jpeg";
import img4 from "../assets/imageGalery/4.jpeg";
import img5 from "../assets/imageGalery/5.jpeg";
import img6 from "../assets/imageGalery/6.jpeg";
import img7 from "../assets/imageGalery/7.jpeg";
import img8 from "../assets/imageGalery/8.jpeg";
import img9 from "../assets/imageGalery/9.jpeg";
import img10 from "../assets/imageGalery/10.jpeg";
import img11 from "../assets/imageGalery/11.jpeg";
import img12 from "../assets/imageGalery/12.jpeg";
import img13 from "../assets/imageGalery/13.jpeg";
import img14 from "../assets/imageGalery/14.jpeg";
import img15 from "../assets/imageGalery/15.jpeg";

// Data gambar dipisah ke file lain jika semakin banyak
const imageData = [
  {
    id: 1,
    category: "Sereh",
    url: img1,
    description: "Sereh Wangi yang",
  },
  { id: 2, category: "Sereh", url: img2, description: "Sereh Wangi" },
  { id: 3, category: "Sereh", url: img3, description: "Sereh Wangi" },
  { id: 4, category: "Sereh", url: img4, description: "Sereh Wangi" },
  { id: 5, category: "Sereh", url: img5, description: "Sereh Wangi" },
  { id: 6, category: "Pabrik", url: img6, description: "Pabrik Penyulingan" },
  { id: 7, category: "Pabrik", url: img7, description: "Pabrik Penyulingan" },
  { id: 8, category: "Pabrik", url: img8, description: "Pabrik Penyulingan" },
  { id: 9, category: "Pabrik", url: img9, description: "Pabrik Penyulingan" },
  { id: 10, category: "Pabrik", url: img10, description: "Pabrik Penyulingan" },
  { id: 11, category: "Produk", url: img11, description: "Produk Sereh" },
  { id: 12, category: "Produk", url: img15, description: "Produk Sereh" },
  { id: 13, category: "Produk", url: img15, description: "Produk Sereh" },
  { id: 14, category: "Produk", url: img15, description: "Produk Sereh" },
  { id: 15, category: "Produk", url: img15, description: "Produk Sereh" },
];

const GaleryPage = () => {
  // State untuk mengambil parameter 'category' dari URL menggunakan useParams
  const { category } = useParams();

  // State untuk menyimpan gambar yang sedang di-hover
  const [hoveredImageId, setHoveredImageId] = useState(null);

  // State untuk menyimpan gambar yang dipilih oleh pengguna
  const [selectedImage, setSelectedImage] = useState(null);

  // state untuk mengambil index gambar yang sedang dklik
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    category === "Semua" || !category
      ? imageData
      : imageData.filter((image) => image.category === category);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // Menambahkan class overflow-hidden ke body
    document.body.classList.add("overflow-hidden");
  };
  const handleCloseModal = () => {
    setSelectedImage(null);
    document.body.classList.remove("overflow-hidden");
  };

  // Fungsi untuk menavigasi ke gambar berikutnya
  const handleNext = (e) => {
    e.stopPropagation(); // Mencegah penutupan modal saat mengklik Chevron
    const newIndex = (currentIndex + 1) % filteredImages.length; // Jika di akhir array, kembali ke awal
    setSelectedImage(filteredImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  // Fungsi untuk menavigasi ke gambar sebelumnya
  const handlePrev = (e) => {
    e.stopPropagation(); // Mencegah penutupan modal saat mengklik Chevron
    const newIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length; // Jika di awal array, kembali ke akhir
    setSelectedImage(filteredImages[newIndex]);
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
            Sereh Wangi :
            <br />
            Dari bibit unggul hingga
            <br />
            panen berkualitas
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
      />

      <div className="container mx-auto px-4 mb-20">
        {/* Kategori Gambar */}
        <div className="flex justify-center space-x-4 my-4">
          {["Semua", "Sereh", "Pabrik", "Produk"].map((item) => (
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

        {/* Grid Gambar */}
        <div className="grid grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group"
              onMouseEnter={() => setHoveredImageId(image.id)}
              onMouseLeave={() => setHoveredImageId(null)}
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.url}
                alt={image.description}
                className="w-full h-auto cursor-pointer"
                loading="lazy"
              />
              {hoveredImageId === image.id && (
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

        {/* Modal Gambar */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition-opacity duration-300"
            onClick={handleCloseModal}
          >
            <div className="relative flex flex-col items-center max-w-screen-lg mx-auto">
              {/* Chevron Kiri */}
              <div
                className="absolute left-[-150px] top-1/2 transform -translate-y-1/2 lg:w-14 lg:h-14 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer"
                onClick={handlePrev}
              >
                <img src={ChevronLeft} alt="Previous" className="w-4 h-7" />
              </div>

              {/* Gambar */}
              <img
                src={selectedImage.url}
                alt={selectedImage.description}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Deskripsi */}
              <div className="bg-white w-full p-5 text-center">
                <p className="text-lg">{selectedImage.description}</p>
              </div>

              {/* Chevron Kanan */}
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
