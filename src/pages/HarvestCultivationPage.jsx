import React from "react";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";
import HarvestImage from "../assets/images/harvest-image.png";

const HarvestCultivationPage = () => {
  const description =
    "Panen sereh wangi adalah puncak dari proses budidaya. Kualitas minyak yang dihasilkan sangat bergantung pada cara dan waktu panen yang tepat.";

  const sections = [
    {
      title: "Waktu Panen:",
      items: [
        "Sereh wangi dapat dipanen setelah 6 hingga 8 bulan sejak penanaman pertama. Panen berikutnya dapat dilakukan setiap 3 hingga 4 bulan tergantung pada pertumbuhan tanaman dan kondisi cuaca.",
        "Tanda-tanda sereh wangi siap dipanen adalah daun yang sudah mencapai panjang maksimal dan memiliki aroma yang kuat ketika diremas. Daun yang siap dipanen biasanya berwarna hijau tua dan kaku."
      ],
    },
    {
      title: "Cara Panen:",
      items: [
        "Panen dilakukan dengan cara memotong daun sereh wangi menggunakan sabit tajam. Potonglah sekitar 10-15 cm di atas pangkal daun. Pastikan pemotongan dilakukan dengan bersih untuk menghindari kerusakan pada tanaman.",
        "Setelah dipotong, daun sereh wangi dikumpulkan dalam ikatan sekitar 25 Kg per ikat agar tidak terlalu berat dan segera dibawa ke lokasi pengeringan untuk proses selanjutnya. Untuk lahan area Terasering sangat direkomendasikan untuk menggunakan Flying Fox ketika membawa hasil panen ke tempat pengeringan"
      ],
    },
  ];

  const imageUrl = HarvestImage;
  const altText = "Gambar Panen";

  return (
    <>
      <HeroSection
        heroSectionImage={CultivationPageImage}
        text={
          <>
            Raih Hasil Optimal Dari Budidaya
            <br />
            Sereh Wangi :
            <br />
            Ikuti langkah Dari Persiapan Lahan
            <br />
            Hingga Penyulingan Terbaik
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
      />
      {/* Bagian Cards */}
      <Carousel />
      {/* Bagian Alur Budidaya */}
      <CultivationFlow />
      {/* Baagian Informasi Singkat Budidaya */}
      <InformationCard
        classNameTestimoni="lg:hidden hidden"
        image={TestimoniImage}
        tagLine="LAHAN YANG COCOK UNTUK BUDIDAYA SEREH WANGI"
        description="Dalam budididaya serehwangi pemilihan bibit yang tepat menjadi tolak ukur keberhasilan panen, berikut jenis-jenis rumpun sereh wangi yang memiliki kualitas baik"
        classNameAuthor="font-medium"
        author="SerehGrow"
        detailsAuthor="Hasilkan Minyak Atsiri"
      />
      {/* Bagian Detail Informasi Budidaya */}
      <DetailedCultivationInformation
        description={description}
        sections={sections}
        imageUrl={imageUrl}
        altText={altText}
      />{" "}
    </>
  );
};

export default HarvestCultivationPage;
