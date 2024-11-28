import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import HomePageImage from "../assets/images/home-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import FarmerStudyIcon from "../assets/images/farmer-study-icon.png";
import HandphoneImage from "../assets/images/handphone-image.png";
import InfromationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import img1 from "../assets/imageGalery/1.jpeg";
import News from "../components/News";
import axios from "axios";

const testimoniDatas = [
  {
    id: 1,
    image: TestimoniImage,
    description:
      "Budidaya serehwangi di daerah terasering bisa meningkatkan potensi Agrowisata yang mampu membantu perekonomian masyarakat setempat dan membuat desa menjadi lebih maju",
    author: "Artur Tendean Saputra",
    detailsAuthor: "Mahasiswa Pertanian",
  },
  {
    id: 2,
    image: img1,
    description:
      "Budidaya serehwangi meminimalisir tanah dari bencana longsor, dan hasil minyaknya baik untuk kosmetik dan juga pengusir nyamuk",
    author: "Tifany Anjasmara",
    detailsAuthor: "Mahasiswa Pertanian",
  },
];

const HomePage = () => {
  // State untuk melacak testimonial yang ditampilkan
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [infoSerehWangiData, setInfoSerehWangiData] = useState([]);

  // Fungsi untuk berpindah ke testimonial berikutnya
  const handleNext = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimoniDatas.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Fungsi untuk berpindah ke testimonial sebelumnya
  const handlePrev = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimoniDatas.length - 1 : prevIndex - 1
    );
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/info-sereh-wangi"
      );
      setInfoSerehWangiData(response.data);
    } catch (error) {
      console.error("Error dalam mengambil data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                src={`http://localhost:8000/storage/image-landing-page/${data.gambar}`}
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
      <div className="lg:px-12 px-4 mt-20">
        <h2 className="text-green1 text-3xl font-bold text-center lg:text-left mb-5">
          Aplikasi SerehGrow
        </h2>
        <div className="flex lg:flex-row flex-col-reverse bg-gray-100 p-6">
          <div className="lg:w-9/12 w-full">
            <p className="text-justify text-lg text-gray-600 font-medium">
              <b className="text-green1">SEREHGROW</b> adalah aplikasi manajemen
              terpadu yang dirancang khusus untuk membantu petani dan pengelola
              perkebunan serehwangi dalam mengoptimalkan setiap aspek proses
              produksi, mulai dari perencanaan dan pengelolaan lahan hingga
              proses penyulingan minyak atsiri. Aplikasi ini menawarkan
              fitur-fitur canggih yang mempermudah pencatatan data, pemantauan
              pertumbuhan tanaman, analisis hasil panen, dan manajemen produksi
              penyulingan, sehingga memungkinkan pengguna untuk meningkatkan
              efisiensi, kualitas, dan produktivitas secara keseluruhan.
            </p>
            <a
              href=""
              className="text-green1 text-lg mt-5 font-medium hover:underline inline-block"
            >
              Pelajari Lebih
            </a>
          </div>
          <div className="lg:w-3/12 w-full">
            <img src={HandphoneImage} alt="" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Bagian informasi Testimoni */}
      <InfromationCard
        description={`\" ${testimoniDatas[currentTestimonial].description} \"`}
        author={testimoniDatas[currentTestimonial].author}
        detailsAuthor={testimoniDatas[currentTestimonial].detailsAuthor}
        image={testimoniDatas[currentTestimonial].image}
        classNameTagLine="lg:hidden hidden"
        classNameDescription="font-mono"
        classNameAuthor="font-mono"
        classBtnPrevAndNext="flex"
        prevOnClick={handlePrev}
        nextOnClick={handleNext}
      />

      <News />
    </>
  );
};

export default HomePage;
