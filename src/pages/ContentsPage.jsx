import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ContentPageImage from "../assets/images/content-page-image.png";
import Content from "../components/Content";
import News from "../components/News";

const ContentsPage = () => {
  // State untuk menyimpan data artikel yang diterima dari API Laravel
  const [contents, setContent] = useState([]);

  // useEffect untuk mengambil data dari API Laravel saat komponen pertama kali dirender
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/article-content") // Sesuaikan URL ini dengan konfigurasi API Laravel Anda
      .then((response) => {
        setContent(response.data); // Asumsi bahwa data di respons berbentuk array
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <>
      <HeroSection
        heroSectionImage={ContentPageImage}
        text={
          <>
            Baca beberapa konten artikel kami
            <br />
            untuk mendapat informasi
            <br />
            seputar Sereh Wangi
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
      />

      <div className="lg:px-12 px-4 py-8">
        <p className="text-xl font-medium mb-4">Resource</p>

        <div className="lg:px-12 px-2 flex flex-col lg:grid lg:grid-cols-12 gap-4">
          {/* Pastikan artikel pertama ada sebelum menampilkan */}
          {contents[0] && (
            <Content
              containerClass="lg:col-span-8 flex flex-col-reverse lg:flex-row shadow-lg p-4"
              textContainerClass="flex flex-col justify-between lg:w-7/12 pr-4"
              headingClass="font-semibold text-3xl leading-snug mb-4"
              headingText={
                <Link
                  className="hover:underline"
                  to={`/konten/${contents[0].slug}`}
                >
                  {contents[0].judul_konten}
                </Link>
              }
              dateClass="text-xl font-medium"
              dateText={contents[0].created_at}
              imageContainerClass="lg:w-5/12"
              imageClass="lg:w-96 lg:h-96 w-full h-56 object-cover"
              imageSrc={`http://localhost:8000/storage/image-content/${contents[0].gambar}`}
            />
          )}

          <div className="lg:col-span-4 flex gap-4 flex-row lg:flex-col overflow-x-auto">
            {contents.slice(1, 4).map((content) => (
              <Content
                key={content.id_konten}
                containerClass="flex-shrink-0 flex flex-col-reverse lg:flex-row mb-4 shadow-md p-3 w-64 lg:w-full"
                textContainerClass="lg:w-7/12 pr-4"
                headingClass="text-md font-bold leading-tight mb-2"
                headingText={
                  <Link
                    className="hover:underline"
                    to={`/konten/${content.slug}`}
                  >
                    {content.judul_konten}
                  </Link>
                }
                dateClass="text-sm font-medium"
                dateText={content.created_at}
                imageContainerClass="lg:w-5/12"
                imageClass="w-full h-24"
                imageSrc={`http://localhost:8000/storage/image-content/${content.gambar}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="inline-block mb-4 lg:px-12">
            <h3 className="text-2xl text-slate-800 font-bold">Terbaru</h3>
            <hr className="border-t-4 border-green2" />
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 flex flex-col-reverse gap-5">
            <div className="col-span-8 h-screen overflow-y-auto">
              {contents.map((content) => (
                <Content
                  key={content.id_konten}
                  containerClass="flex flex-col-reverse lg:flex-row-reverse mb-4 shadow-md p-3 gap-6"
                  textContainerClass="lg:w-7/12 flex flex-col justify-between pr-4"
                  headingClass="text-xl font-bold leading-tight mb-2"
                  headingText={
                    <Link
                      className="hover:underline"
                      to={`/konten/${content.slug}`}
                    >
                      {content.judul_konten}
                    </Link>
                  }
                  dateClass="text-sm font-medium"
                  dateText={content.created_at}
                  imageContainerClass="lg:w-5/12"
                  imageClass="w-full h-48 object-cover"
                  imageSrc={`http://localhost:8000/storage/image-content/${content.gambar}`}
                />
              ))}
            </div>

            <div className="col-span-4 bg-slate-200">
              <div className="advertisement">IKLAN</div>
            </div>
          </div>
        </div>
      </div>
      <News />
    </>
  );
};

export default ContentsPage;
