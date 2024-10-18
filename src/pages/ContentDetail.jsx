import React from "react";
import { Link, useParams } from "react-router-dom";
import Content from "../components/Content";
import img1 from "../assets/imageGalery/15.jpeg";
import img2 from "../assets/imageGalery/1.jpeg";
import News from "../components/News";

const ContentDetail = () => {
  const { slug } = useParams();

  const articles = [
    {
      id: 1,
      title: "Perbandingan bibit serai wangi tipe mahapengiri dan lenabatu",
      author: "Ilham Maulana",
      content: "Konten detail tentang cara membudidayakan serai.",
      date: "20 September 2024",
      time: "09.00",
      slug: "perbandingan-bibit-serai-wangi-tipe-mahapengiri-dan-lenabatu",
      image: img1,
    },
    {
      id: 2,
      title: "Cara membudidayakan Serai dengan baik",
      author: "Ilham Maulana",
      content: "Konten detail tentang cara membudidayakan serai.",
      date: "20 September 2024",
      time: "09.00",
      slug: "cara-membudidayakan-serai-dengan-baik",
      image: img2,
    },
    {
      id: 3,
      title: "Sereh Wangi menjadi topik penelitian mahasiswa",
      author: "Ilham Maulana",
      content: "Konten detail tentang penelitian mahasiswa.",
      date: "20 September 2024",
      time: "09.00",
      slug: "sereh-wangi-menjadi-topik-penelitian-mahasiswa",
      image: img2,
    },
    {
      id: 4,
      title: "Petani merasakan dampak dari budidaya Sereh Wangi",
      author: "Ilham Maulana",
      content: "Konten detail tentang dampak sereh wangi",
      date: "20 September 2024",
      time: "09.00",
      slug: "petani-merasakan-dampak-sereh-wangi",
      image: img2,
    },
    {
      id: 5,
      title: "Petani merasakan dampak dari budidaya Sereh Wangi",
      author: "Ilham Maulana",
      content: "Konten detail tentang dampak sereh wangi",
      date: "20 September 2024",
      time: "09.00",
      slug: "petani-merasakan-dampak-sereh-wangi",
      image: img2,
    },
    {
      id: 6,
      title: "Petani merasakan dampak dari budidaya Sereh Wangi",
      author: "Ilham Maulana",
      content: "Konten detail tentang dampak sereh wangi",
      date: "20 September 2024",
      time: "09.00",
      slug: "petani-merasakan-dampak-sereh-wangi",
      image: img2,
    },
  ];

  // Cari artikel berdasarkan slug
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <p>Artikel tidak ditemukan</p>;
  }
  return (
    <div className="">
      <div className="">
        <div className="relative w-full h-72 lg:w-full lg:h-[696px]">
          <div
            className="bg-cover bg-center w-full h-full filter blur-sm absolute top-0 left-0"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="flex justify-center items-center h-full relative">
            <img
              src={article.image}
              alt="gambar"
              className="lg:w-[1100px] lg:h-full w-full h-56"
            />
          </div>
        </div>
      </div>

      <div className="px-6 grid grid-cols-12 gap-6 mt-10">
        <div className="col-span-12 lg:col-span-9">
          <div className="flex flex-col gap-5">
            <h1 className="lg:text-5xl text-4xl font-bold">{article.title}</h1>
            <div className="flex lg:flex-row flex-col justify-between">
              <h2 className="text-green2 font-semibold lg:text-2xl text-xl">
                {article.author}
              </h2>
              <div className="flex gap-5 font-semibold lg:text-lg text-md">
                <p>{article.date}</p>
                <p>{article.time}</p>
              </div>
            </div>
          </div>
          <hr className="border-t-3 border-black my-4" />
          <div className="px-4 text-xl">{article.content}</div>
        </div>
        <div className="lg:block lg:col-span-3 hidden">
          <div className="inline-block mb-4">
            <h3 className="text-2xl text-slate-800 font-bold">Post Terbaru</h3>
            <hr className="border-t-3 border-black my-2" />
          </div>{" "}
          {articles.slice(1, 4).map((article) => (
            <Content
              key={article.id}
              containerClass="flex flex-col-reverse mb-4 shadow-md p-3"
              textContainerClass="pr-4"
              headingClass="text-md font-semibold leading-tight mb-2"
              headingText={
                <Link
                  to={`/konten/${article.slug}`}
                  className="text-black hover:underline"
                >
                  {article.title}
                </Link>
              }
              dateClass="text-sm italic"
              dateText={article.date}
              imageContainerClass=""
              imageClass="w-full h-56 object-cover"
              imageSrc={article.image}
            />
          ))}
        </div>
      </div>
      <News />
    </div>
  );
};

export default ContentDetail;
