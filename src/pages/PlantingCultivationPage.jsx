import React from "react";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";
import PlantingImage from "../assets/images/help-page-image.png";

const PlantingCultivationPage = () => {
  const description =
    "Setelah lahan siap, langkah selanjutnya adalah penanaman dan perawatan yang tepat. Perawatan yang baik akan memastikan tanaman sereh wangi tumbuh dengan sehat dan menghasilkan minyak atsiri berkualitas.";

  const sections = [
    {
      title: "Musim Tanam:",
      items: [
        "Penanaman sereh wangi sebaiknya dilakukan pada awal musim hujan. Curah hujan yang cukup di awal pertumbuhan akan membantu bibit beradaptasi dan tumbuh dengan baik. Musim hujan memberikan kelembaban tanah yang ideal untuk pertumbuhan sereh wangi.",
      ],
    },
    {
      title: "Proses Penanaman:",
      items: [
        "Bibit sereh wangi ditanam dengan kedalaman sekitar 5-10 cm. Pastikan bagian akar tertutup tanah dengan baik agar bibit bisa berdiri tegak dan mendapatkan nutrisi yang cukup dari tanah.",
      ],
    },
    {
      title: "Perawatan Tanaman:",
      items: [
        "Penyiraman: Sereh wangi tidak memerlukan penyiraman rutin. Penyiraman hanya diperlukan saat musim kering berkepanjangan, itupun cukup dilakukan sekali dalam seminggu.",
        "Pemupukan: Tanaman sereh wangi tidak memerlukan pemupukan intensif. Namun, jika tanah dirasa kurang subur, pemupukan organik seperti kompos bisa dilakukan satu kali dalam setahun.",
        "Pengendalian Hama: Sereh wangi relatif tahan terhadap hama. Namun, jika terjadi serangan hama, penggunaan pestisida organik disarankan untuk menjaga kualitas tanaman dan minyak yang dihasilkan.",
      ],
    },
  ];

  const imageUrl = PlantingImage;
  const altText = "Gambar Penanaman";

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

export default PlantingCultivationPage;
