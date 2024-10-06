// eslint-disable-next-line no-unused-vars
import React from "react";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";
import SeedImage from "../assets/images/lemongrass-image.png";

const SeedCultivationPage = () => {
  const description =
    "Pemilihan bibit merupakan langkah krusial dalam memulai budidaya sereh wangi. Bibit yang berkualitas tinggi akan menjamin pertumbuhan tanaman yang optimal dan hasil minyak atsiri yang maksimal.";

  const sections = [
    {
      title: "Jenis Bibit yang Direkomendasikan:",
      items: [
        "G2 dan G3: Jenis bibit ini sangat direkomendasikan karena telah terbukti memberikan hasil minyak atsiri dengan kualitas yang baik serta produktivitas tinggi.",
        "Paris dan Balon: Jenis bibit alternatif yang juga dapat digunakan, meskipun mungkin tidak seunggul G2 dan G3 dalam hal produksi minyak atsiri.",
      ],
    },
    {
      title: "Ciri-ciri Bibit Unggul:",
      items: [
        "Setiap rumpun bibit sereh wangi idealnya terdiri dari 80 hingga 120 tangkai atau daun. Bibit yang lebih padat dalam satu rumpun cenderung memiliki potensi pertumbuhan yang lebih kuat.",
        "Bibit yang dipilih harus bebas dari penyakit dan hama. Daun yang sehat biasanya memiliki warna hijau cerah tanpa adanya bercak-bercak kuning atau coklat.",
      ],
    },
  ];

  const imageUrl = SeedImage;
  const altText = "Gambar Bibit Sereh Wangi";

  return (
    <>
      <HeroSection
        heroSectionImage={CultivationPageImage}
        text={
          <>
            Raih hasil optimal dari budidaya
            <br />
            Sereh Wangi :
            <br />
            Ikuti langkah dari persiapan lahan
            <br />
            hingga penyulingan terbaik
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
        tagLine="JENIS-JENIS BIBIT SEREH WANGI"
        description="Dalam budididaya serehwangi pemilihan bibit
        yang tepat menjadi tolak ukur kebrhasilan panen, berikut
        jenis-jenis rumpun sereh wangi yang memiliki kualitas baik"
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

export default SeedCultivationPage;
