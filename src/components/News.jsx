import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import axios from "axios";

const News = () => {
  const [contents, setContent] = useState([]);

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
        {contents.slice(0, 3).map((content) => (
          <Link to={`/konten/${content.slug}`}>
            <Card
              key={content.id_konten} // Gunakan key unik
              className="min-w-60 max-w-72 h-auto gap-2 p-5 hover:bg-slate-200 transition-all duration-300 hover:cursor-pointer"
              classNameCardImage="w-full h-44 rounded-md"
              cardImage={`http://localhost:8000/storage/image-content/${content.gambar}`} // Gambar dari API
              classNameCardText="font-semibold text-xl"
              textContent={content.judul_konten} // Judul konten dari API
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default News;
