import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Content from "../components/Content";
import News from "../components/News";
import AuthorIcon from "../assets/images/user.png";
import DateTime from "../assets/images/date-time.png";
import { format } from "date-fns"; // import date-fns
import "../assets/style/ckeditor.css";

const ContentDetail = () => {
  const { slug } = useParams();
  const [contents, setContent] = useState([]);
  const [detailContens, setDetailContents] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/article-content")
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/article-content/${slug}`)
      .then((response) => {
        setDetailContents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [slug]);

  if (!detailContens) {
    return <p>Artikel tidak ditemukan atau sedang dimuat...</p>;
  }

  // Format tanggal `created_at`
  const formattedDate = format(
    new Date(detailContens.created_at),
    "d MMMM yyyy, HH:mm"
  );

  return (
    <div className="">
      <div className="relative w-full h-72 lg:w-full lg:h-[696px]">
        <div
          className="bg-cover bg-center w-full h-full filter blur-sm absolute top-0 left-0"
          style={{
            backgroundImage: `url(http://localhost:8000/storage/image-content/${detailContens.gambar})`,
          }}
        />
        <div className="flex justify-center items-center h-full relative">
          <img
            src={`http://localhost:8000/storage/image-content/${detailContens.gambar}`}
            alt="gambar"
            className="lg:w-[1100px] lg:h-full w-full h-56"
          />
        </div>
      </div>

      <div className="px-6 grid grid-cols-12 gap-6 mt-10">
        <div className="col-span-12 lg:col-span-9">
          <div className="flex flex-col gap-10">
            <h1 className="lg:text-5xl text-4xl font-bold">
              {detailContens.judul_konten}
            </h1>
            <div className="flex lg:flex-row flex-col items-start space-y-5 lg:items-center justify-between">
              <div className="flex justify-center items-center gap-5">
                <img src={AuthorIcon} alt="" className="lg:w-16 lg:h-16 w-10 h-10" />
                <h2 className="text-green2 font-semibold lg:text-3xl text-xl">
                  {detailContens.nama_penulis}{" "}
                </h2>
              </div>
              <div className="flex gap-3 font-semibold lg:text-lg text-md">
                <img src={DateTime} alt="" className="w-8 h-8" />
                <p>{formattedDate}</p> {/* Menampilkan tanggal yang sudah diformat */}
              </div>
            </div>
          </div>
          <hr className="border-t-3 border-black mt-10 mb-16" />
          <div
            className="rich-text-content px-4 text-xl text-justify"
            dangerouslySetInnerHTML={{ __html: detailContens.deskripsi_konten }}
          ></div>
        </div>
        <div className="lg:block lg:col-span-3 hidden">
          <div className="inline-block mb-4">
            <h3 className="text-2xl text-slate-800 font-bold">Post Terbaru</h3>
            <hr className="border-t-3 border-black my-2" />
          </div>
          {contents.slice(1, 4).map((content) => (
            <Content
              key={content.id_konten}
              containerClass="flex flex-col-reverse mb-4 shadow-md p-3"
              textContainerClass="pr-4"
              headingClass="text-md font-semibold leading-tight mb-2"
              headingText={
                <Link
                  to={`/konten/${content.slug}`}
                  className="text-black hover:underline"
                >
                  {content.judul_konten}
                </Link>
              }
              dateClass="text-sm italic"
              dateText={format(new Date(content.created_at), "d MMMM yyyy, HH:mm")}
              imageContainerClass=""
              imageClass="w-full h-56 object-cover"
              imageSrc={`http://localhost:8000/storage/image-content/${content.gambar}`}
            />
          ))}
        </div>
      </div>
      <News />
    </div>
  );
};

export default ContentDetail;
