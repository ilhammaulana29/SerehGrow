import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import HomePageImage from "../assets/images/home-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import FarmerStudyIcon from "../assets/images/farmer-study-icon.png";
import HandphoneImage from "../assets/images/handphone-image.png";
import InfromationCard from "../components/InformationCard";
import News from "../components/News";
import axios from "axios";

const HomePage = () => {
  // State untuk melacak testimonial yang ditampilkan
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [infoSerehWangiData, setInfoSerehWangiData] = useState([]);
  const [infoSerehGrowData, setInfoSerehGrowData] = useState([]);
  const [testimonyData, setTestimonyData] = useState([]);

  // Fungsi untuk berpindah ke testimonial berikutnya
  const handleNext = () => {
    setCurrentTestimonial((prevIndex) => {
      const nextIndex = prevIndex === testimonyData.length - 1 ? 0 : prevIndex + 1;
      console.log("Next testimonial index:", nextIndex);
      return nextIndex;
    });
  };
  
  const handlePrev = () => {
    setCurrentTestimonial((prevIndex) => {
      const prevIndexNew = prevIndex === 0 ? testimonyData.length - 1 : prevIndex - 1;
      console.log("Previous testimonial index:", prevIndexNew);
      return prevIndexNew;
    });
  };
  

  const fetchSerehWangiInfo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/info-sereh-wangi"
      );
      setInfoSerehWangiData(response.data);
    } catch (error) {
      console.error("Error dalam mengambil data:", error);
      setInfoSerehWangiData([
        {
          id: 1,
          deskripsi_sereh_wangi: "Deskripsi sereh wangi tidak tersedia.",
          gambar: "https://via.placeholder.com/150",
        },
      ]);
    }
  };

  const fetchSerehGrowInfo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/info-sereh-grow"
      );
      setInfoSerehGrowData(response.data);
    } catch (error) {
      console.error("Error dalam mengambil data:", error);
      setInfoSerehGrowData([
        {
          id: 1,
          deskripsi_sereh_wangi: "Deskripsi sereh grow tidak tersedia.",
          gambar: "https://via.placeholder.com/150",
        },
      ]);
    }
  };

  const fetchTestimony = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/testimoni");
      console.log("Data yang diperoleh:", response.data); // Log data ke console
      setTestimonyData(response.data);
    } catch (error) {
      console.error("Error dalam mengambil data:", error);
    }
  };

  useEffect(() => {
    fetchSerehWangiInfo();
    fetchSerehGrowInfo();
    fetchTestimony();

    // Auto slide testimonials every 3 seconds
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [testimonyData.length]);

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

      {infoSerehWangiData.map((data) => (
        <div
          key={data.id}
          className="flex flex-col-reverse lg:flex-row mx-auto w-full pt-10 lg:pt-28 px-4 lg:px-12 space-y-6 lg:space-y-0 lg:space-x-6"
          id="serehwangi"
        >
          {/* left side : text */}
          <div className="flex-1 lg:basis-5/12">
            <h2 className="text-green1 text-3xl font-bold text-center lg:text-left mt-3 lg:mt-0">
              Apa Itu Sereh Wangi ?
            </h2>
            <p className="mt-4 text-gray-700 text-lg text-justify">
              {data.deskripsi_sereh_wangi}
            </p>
          </div>
          {/* right side : image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <img
                src={
                  data.gambar.startsWith("http")
                    ? data.gambar
                    : `http://localhost:8000/storage/image-landing-page/${data.gambar}`
                }
                alt="Sereh Wangi"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Bagian Alur Budidaya Sereh Wangi */}
      <CultivationFlow />

      {/* Informasi pengelolaan sereh wangi */}
      <div className="bg-gradient-to-r from-greenLight to-greenDark p-5">
        <h2 className="lg:px-12 px-4 text-white text-3xl font-bold text-center lg:text-left mt-3 lg:mt-0">
          Pengolahan Sereh Wangi Menjadi Minyak Atsiri
        </h2>
        <div className="flex space-y-5 flex-col lg:flex-row justify-between items-center px-12">
          <div className="lg:flex hidden items-center space-x-4">
            <div className="w-20 h-20 flex justify-center items-center bg-green3 rounded-full">
              <p className="text-green1 text-md font-semibold">Sitronelal</p>
            </div>
            <div className="w-16 h-16 flex justify-center items-center bg-green3 rounded-full">
              <p className="text-green1 text-xs font-semibold">Geraniol</p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <p className="text-white text-justify text-lg">
              Serehwangi merupakan tanaman yang mudah dibudidayakan, terutama di
              daerah tropis seperti Indonesia. Selain memberikan nilai ekonomi
              yang tinggi melalui produksi minyak atsiri, serehwangi juga
              memiliki manfaat ekologis
            </p>
          </div>

          <div className="">
            <img src={FarmerStudyIcon} alt="Farmer-Study" />
          </div>
        </div>
      </div>

      {/* Penjelasan Aplikasi SEREHGROW */}
      {infoSerehGrowData.map((data) => (
        <div key={data.id} className="lg:px-12 px-4 mt-20">
          <h2 className="text-green1 text-3xl font-bold text-center lg:text-left mb-5">
            Aplikasi SerehGrow
          </h2>
          <div className="flex lg:flex-row flex-col-reverse bg-gray-100 p-6">
            <div className="lg:w-9/12 w-full">
              <p className="text-justify text-lg text-gray-600 font-medium">
                {data.deskripsi_sereh_grow}
              </p>
              <p
                href=""
                className="text-green1 text-lg mt-5 font-medium hover:underline hover:cursor-pointer inline-block"
              >
                Pelajari Lebih
              </p>
            </div>
            <div className="lg:w-3/12 w-full">
              <img
                src={
                  data.gambar.startsWith("http")
                    ? data.gambar
                    : `http://localhost:8000/storage/image-landing-page/${data.gambar}`
                }
                alt="Sereh Grow"
                className="w-full h-auto"
              />{" "}
            </div>
          </div>
        </div>
      ))}

      {/* Bagian informasi Testimoni */}
      {testimonyData.length > 0 ? (
        <InfromationCard
          description={`\" ${testimonyData[currentTestimonial]?.pesan_testimoni} \"`}
          author={testimonyData[currentTestimonial]?.nama}
          profesi={testimonyData[currentTestimonial]?.profesi}
          image={`http://localhost:8000/storage/image-landing-page/${testimonyData[currentTestimonial]?.gambar}`}
          classNameTagLine="lg:hidden hidden"
          classNameDescription="font-mono"
          classNameAuthor="font-mono"
          classBtnPrevAndNext="flex"
          prevOnClick={handlePrev}
          nextOnClick={handleNext}
        />
      ) : (
        <p>loading...</p>
      )}

      <News />
    </>
  );
};

export default HomePage;
