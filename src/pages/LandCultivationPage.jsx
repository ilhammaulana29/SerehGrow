import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";

const LandCultivationPage = () => {
  const [kontenPersiapanLahanData, setKontenPersiapanLahanData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/konten-lahan"
      );
      const data = response.data?.length > 0 ? response.data[0] : null;
      setKontenPersiapanLahanData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setKontenPersiapanLahanData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      {kontenPersiapanLahanData && (
        <DetailedCultivationInformation
          header={kontenPersiapanLahanData.judul}
          content={kontenPersiapanLahanData.isi_konten}
          altText={altText}
          imageUrl={`http://localhost:8000/storage/image-konten-budidaya/${kontenPersiapanLahanData.gambar}`}
        />
      )}
    </>
  );
};

export default LandCultivationPage;
