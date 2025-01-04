import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";

const SDMCultivationPage = () => {
  const [kontenSdmData, setKontenSdmData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/konten-sdm-budidaya"
      );
      const data = response.data?.length > 0 ? response.data[0] : null;
      setKontenSdmData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setKontenSdmData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const altText = "Gambar SDM";

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
        tagLine="CARA MERAWAT TANAMAN SEREH WANGI"
        description="Untuk mendapatkan hasil panen yang maksimal, perawatan tanaman sereh wangi perlu dilakukan dengan baik. Beberapa hal yang harus diperhatikan dalam perawatan tanaman ini antara lain memastikan tanaman terkena sinar matahari yang cukup, Pastikan tanaman mendapatkan cukup air terutama saat musim kemarau, tanaman sereh wangi uniknya tidak terlalu banyak hama dan pupuk bisa diganti dengan daun hasil penyulingan."
        classNameAuthor="font-medium"
        author="SerehGrow"
        detailsAuthor="Hasilkan Minyak Atsiri"
      />
     {kontenSdmData && (
        <DetailedCultivationInformation
          header={kontenSdmData.judul}
          content={kontenSdmData.isi_konten}
          altText={altText}
          imageUrl={`http://localhost:8000/storage/image-konten-budidaya/${kontenSdmData.gambar}`}
        />
      )}
    </>
  );
};

export default SDMCultivationPage;
