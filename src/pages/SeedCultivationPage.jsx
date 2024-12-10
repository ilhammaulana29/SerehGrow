import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";

const SeedCultivationPage = () => {
  const [kontenBibitData, setKontenBibitData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/konten-bibit"
      );
      const data = response.data?.length > 0 ? response.data[0] : null;
      setKontenBibitData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setKontenBibitData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {/* Bagian Informasi Singkat Budidaya */}
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
      {kontenBibitData && (
        <DetailedCultivationInformation
          header={kontenBibitData.judul}
          content={kontenBibitData.isi_konten}
          altText={altText}
          imageUrl={`http://localhost:8000/storage/image-konten-budidaya/${kontenBibitData.gambar}`}
        />
      )}
    </>
  );
};

export default SeedCultivationPage;
