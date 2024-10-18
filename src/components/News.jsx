import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import img2 from "../assets/imageGalery/1.jpeg";

const News = () => {
  return (
    <div className="mb-16 mt-16">
      <div className="text-center mb-5">
        <h3 className="lg:text-4xl text-3xl text-gree font-bold mb-3">
          Jelajahi Artikel Terbaru Dunia Pertanian
        </h3>
        <Link to="/konten">
          <p className="font-medium text-green2 hover:underline inline-block">
            Lihat semua artikel
          </p>
        </Link>
      </div>

      <div className="flex lg:justify-center justify-normal overflow-x-auto gap-5">
        <Card
          className="min-w-60 max-w-72 h-auto gap-2 p-5 hover:bg-slate-200 transition-all duration-300 hover:cursor-pointer"
          classNameCardImage="w-full h-44 rounded-md"
          cardImage={img2}
          classNameCardText="font-semibold text-xl"
          textContent="Manfaat Minyak Atsiri Bagi Kecantikan"
        />
        <Card
          className="min-w-60 max-w-72 h-auto gap-2 p-5 hover:bg-slate-200 transition-all duration-300 hover:cursor-pointer"
          classNameCardImage="w-full h-44 rounded-md"
          cardImage={img2}
          classNameCardText="font-semibold text-xl"
          textContent="Manfaat Minyak Atsiri Bagi Kecantikan"
        />
        <Card
          className="min-w-60 max-w-72 h-auto gap-2 p-5 hover:bg-slate-200 transition-all duration-300 hover:cursor-pointer"
          classNameCardImage="w-full h-44 rounded-md"
          cardImage={img2}
          classNameCardText="font-semibold text-xl"
          textContent="Manfaat Minyak Atsiri Bagi Kecantikan"
        />
      </div>
    </div>
  );
};

export default News;
