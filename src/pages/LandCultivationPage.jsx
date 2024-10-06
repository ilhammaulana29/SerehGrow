import React from "react";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";
import LandImage from "../assets/images/land-image.png";

const LandCultivationPage = () => {
  const description =
    "Lahan yang tepat adalah kunci untuk pertumbuhan sereh wangi yang optimal. Penentuan lokasi dan persiapan lahan secara benar akan mempengaruhi hasil panen secara keseluruhan.";

  const sections = [
    {
      title: "Lokasi Penanaman:",
      items: [
        "Sereh wangi membutuhkan area yang terbuka dengan paparan sinar matahari penuh sepanjang hari. Tanaman ini tidak cocok untuk ditanam di daerah yang teduh atau terlindungi dari sinar matahari.",
        "Jarak tanam yang ideal adalah 1 meter antar rumpun. Jarak ini memungkinkan setiap rumpun memiliki ruang yang cukup untuk tumbuh dan menghindari persaingan sumber daya seperti air dan nutrisi."
      ],
    },
    {
      title: "Persiapan Lahan:",
      items: [
        "Pembukaan Lahan: Lahan perlu dibersihkan dari semua jenis gulma, tanaman liar, dan sisa-sisa tanaman sebelumnya. Pengolahan tanah dilakukan untuk memperbaiki struktur tanah sehingga lebih gembur dan memiliki drainase yang baik.",
        "Pengendalian Rumput Liar: Penting untuk melakukan pengendalian rumput liar secara rutin. Gulma yang tumbuh di sekitar sereh wangi dapat menyerap nutrisi dan air yang seharusnya digunakan oleh tanaman sereh wangi, sehingga dapat menghambat pertumbuhan."
      ],
    },
  ];

  const imageUrl = LandImage;
  const altText = "Gambar Lahan";

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

export default LandCultivationPage;
