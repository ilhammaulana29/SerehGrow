import React from "react";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";
import DistilationImage from "../assets/images/distilation-image.png";

const DistilationCultivationPage = () => {
  const description =
    "Penyulingan merupakan proses mengubah daun sereh wangi menjadi minyak atsiri yang bernilai ekonomi tinggi. Proses ini memerlukan teknik dan alat khusus untuk mendapatkan hasil yang optimal.";

  const sections = [
    {
      title: "Pengeringan Daun:",
      items: [
        "Sebelum penyulingan, daun sereh wangi harus dilayukan terlebih dahulu. Proses pelayuan bertujuan untuk mengurangi kadar air dalam daun sehingga minyak atsiri yang dihasilkan lebih murni.",
        "Biasanya, dibutuhkan sekitar 700 kg daun sereh wangi untuk satu kali penyulingan. Daun dikeringkan di bawah sinar matahari selama 1-2 hari hingga kadar air berkurang.",
      ],
    },
    {
      title: "Proses Penyulingan:",
      items: [
        "Penyulingan dilakukan dengan menggunakan tungku penyulingan. Daun yang sudah layu dimasukkan ke dalam tungku, dan proses penyulingan berlangsung selama sekitar 4 jam dengan api yang stabil.",
        "Satu tungku penyulingan berkapasitas 700-800 kg daun sereh wangi dan dapat dilakukan dua kali penyulingan per hari.",
      ],
    },
  ];

  const imageUrl = DistilationImage;
  const altText = "Gambar Penyulingan";

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

export default DistilationCultivationPage;
