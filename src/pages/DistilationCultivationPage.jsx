import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import CultivationPageImage from "../assets/images/cultivation-page-image.png";
import Carousel from "../components/Carousel";
import CultivationFlow from "../components/CultivationFlow";
import InformationCard from "../components/InformationCard";
import TestimoniImage from "../assets/images/testimoni-image.png";
import DetailedCultivationInformation from "../components/DetailedCultivationInformation";

const DistilationCultivationPage = () => {
  const [kontenPenyulinganData, setKontenPenyulinganData] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/konten-penyulingan"
      );
      const data = response.data?.length > 0 ? response.data[0] : null;
      setKontenPenyulinganData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setKontenPenyulinganData(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        tagLine="PROSES PENYULINGAN SEREH WANGI"
        description="Setelah sereh wangi dipanen, langkah berikutnya adalah penyulingan untuk mengekstrak minyak atsiri. Proses penyulingan dilakukan dengan cara menguapkan dan mengembunkan uap minyak dari daun sereh wangi. Metode penyulingan yang umum digunakan adalah metode distilasi uap. Proses ini membutuhkan waktu dan suhu yang tepat untuk menghasilkan minyak sereh wangi berkualitas tinggi. Minyak yang dihasilkan akan memiliki warna kuning keemasan dengan aroma khas sereh wangi."
        classNameAuthor="font-medium"
        author="SerehGrow"
        detailsAuthor="Hasilkan Minyak Atsiri"
      />
      {kontenPenyulinganData && (
        <DetailedCultivationInformation
          header={kontenPenyulinganData.judul}
          content={kontenPenyulinganData.isi_konten}
          altText={altText}
          imageUrl={`http://localhost:8000/storage/image-konten-budidaya/${kontenPenyulinganData.gambar}`}
        />
      )}
    </>
  );
};

export default DistilationCultivationPage;
