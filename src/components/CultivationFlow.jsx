import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "./Card";
import cultivationFlowFirst from "../assets/images/cultivation-flow-1.svg";
import cultivationFlowSecond from "../assets/images/cultivation-flow-2.svg";
import cultivationFlowThird from "../assets/images/cultivation-flow-3.svg";
import cultivationFlowFourth from "../assets/images/cultivation-flow-4.svg";
import cultivationFlowFiveth from "../assets/images/cultivation-flow-5.svg";

const CultivationFlow = () => {
  const location = useLocation(); // Ambil lokasi saat ini

  // Function untuk menentukan kombinasi filter untuk efek putih
  const getFilterClass = (path) => 
    location.pathname === path 
    ? "invert brightness-0" // Membuat gambar putih sepenuhnya
    : "invert-0"; // Mengembalikan ke normal

  return (
    <div
      className="flex flex-col px-4 lg:px-12 py-12 mx-auto w-full"
      id="alurbudidaya"
    >
      <h2 className="text-green1 text-3xl font-bold mt-2 text-center lg:text-left lg:mt-10">
        Seberapa Mudah Budidaya Sereh Wangi?
      </h2>

      <div className="flex mt-5 space-x-4 lg:space-x-6 overflow-x-auto p-3">
        <Link to="/bibit">
          <Card
            className={`w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 drop-shadow-lg rounded-md ${
              location.pathname === "/bibit"
                ? "bg-greenPrimer"
                : "bg-green3 hover:bg-green-200"
            }`}
            cardImage={cultivationFlowFirst}
            classNameCardImage={`mb-4 ${getFilterClass("/bibit")}`} // Gunakan kelas filter
            classNameCardText={`font-bold ${
              location.pathname === "/bibit" ? "text-white" : "text-green1"
            }`}
            textContent="Pemilihan Bibit"
          />
        </Link>

        <Link to="/lahan">
          <Card
            className={`w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 drop-shadow-lg rounded-md ${
              location.pathname === "/lahan"
                ? "bg-greenPrimer"
                : "bg-green3 hover:bg-green-200"
            }`}
            cardImage={cultivationFlowSecond}
            classNameCardImage={`mb-4 ${getFilterClass("/lahan")}`} // Gunakan kelas filter
            classNameCardText={`font-bold ${
              location.pathname === "/lahan" ? "text-white" : "text-green1"
            }`}
            textContent="Lahan"
          />
        </Link>

        <Link to="/penanaman">
          <Card
            className={`w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 drop-shadow-lg rounded-md ${
              location.pathname === "/penanaman"
                ? "bg-greenPrimer"
                : "bg-green3 hover:bg-green-200"
            }`}
            cardImage={cultivationFlowThird}
            classNameCardImage={`mb-4 ${getFilterClass("/penanaman")}`} // Gunakan kelas filter
            classNameCardText={`font-bold ${
              location.pathname === "/penanaman" ? "text-white" : "text-green1"
            }`}
            textContent="Perawatan"
          />
        </Link>

        <Link to="/panen">
          <Card
            className={`w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 drop-shadow-lg rounded-md ${
              location.pathname === "/panen"
                ? "bg-greenPrimer"
                : "bg-green3 hover:bg-green-200"
            }`}
            cardImage={cultivationFlowFourth}
            classNameCardImage={`mb-4 ${getFilterClass("/panen")}`} // Gunakan kelas filter
            classNameCardText={`font-bold ${
              location.pathname === "/panen" ? "text-white" : "text-green1"
            }`}
            textContent="Masa Panen"
          />
        </Link>

        <Link to="/penyulingan">
          <Card
            className={`w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 drop-shadow-lg rounded-md ${
              location.pathname === "/penyulingan"
                ? "bg-greenPrimer"
                : "bg-green3 hover:bg-green-200"
            }`}
            cardImage={cultivationFlowFiveth}
            classNameCardImage={`mb-4 ${getFilterClass("/penyulingan")}`} // Gunakan kelas filter
            classNameCardText={`font-bold ${
              location.pathname === "/penyulingan" ? "text-white" : "text-green1"
            }`}
            textContent="Penyulingan"
          />
        </Link>
      </div>
    </div>
  );
};

export default CultivationFlow;
