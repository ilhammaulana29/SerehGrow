import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";

const HarvestCultivationPage = () => {
  const [kontenMasaPanenData, setKontenMasaPanenData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/konten-panen"
      );
      const data = response.data?.length > 0 ? response.data[0] : null;
      setKontenMasaPanenData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setKontenMasaPanenData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        tagLine="WAKTU DAN CARA PANEN TANAMAN SEREH WANGI"
        description="Masa panen sereh wangi biasanya dilakukan setelah tanaman berusia 6-8 bulan. Tanaman sereh wangi dipanen ketika daunnya mulai menguning atau ketika aroma minyak atsirinya paling kuat. Cara memanen yang baik adalah dengan memotong bagian atas daun menggunakan sabit tajam. Hindari mencabut seluruh tanaman agar dapat tumbuh kembali untuk panen selanjutnya."
        classNameAuthor="font-medium"
        author="SerehGrow"
        detailsAuthor="Hasilkan Minyak Atsiri"
      />
      {kontenMasaPanenData && (
        <DetailedCultivationInformation
          header={kontenMasaPanenData.judul}
          content={kontenMasaPanenData.isi_konten}
          altText={altText}
          imageUrl={`http://localhost:8000/storage/image-konten-budidaya/${kontenMasaPanenData.gambar}`}
        />
      )}
    </>
  );
};

export default HarvestCultivationPage;
