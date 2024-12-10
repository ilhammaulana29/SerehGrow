import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/images/Logo.png";
import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";
import X from "../assets/images/x.png";
import Tiktok from "../assets/images/tiktok.png";
import Farmer from "../assets/images/farmer.png";

const Footer = () => {
  const [address, setAddress] = useState([]); // State untuk menyimpan data alamat
  const [error, setError] = useState(null); // State untuk menyimpan error jika ada

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/company-address"
      );
      setAddress(response.data);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <footer className="bg-greenPrimer text-white py-8 lg:py-20 relative">
      {/* Butuh Bantuan Section */}
      <div className="flex items-center space-x-2 w-32 lg:w-52 lg:p-1 rounded-full bg-white absolute top-[-40px] left-0 lg:top-[-40px] lg:left-12 m-5">
        <div className="bg-gray-300 w-8 h-8 lg:w-12 lg:h-12 rounded-full">
          <img src={Farmer} alt="Petani" className="w-8 h-8 lg:w-12 lg:h-12" />
        </div>
        <Link
          to="/bantuan"
          className="hover:underline font-semibold lg:font-bold text-greenPrimer text-[10px] lg:text-lg"
        >
          Butuh Bantuan ?
        </Link>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-4 lg:px-8">
        {/* Bagian kiri (logo, alamat, informasi perusahaan) */}
        <div className="mb-5 lg:mb-0">
          <img src={logo} alt="Logo" className="mb-3 w-24 lg:mb-5 lg:w-40" />
          <p className="mb-0 text-xs font-semibold lg:mb-3 lg:text-base">
            PT CAKRAWALA GLOBAL INFORMATIKA
          </p>
          {address.map((data) => (
            <div key={data.id_cpaddress} className="">
              <p className="flex flex-wrap text-xs lg:text-base">
                <span>{data.jalan}</span>{" "}
                <span className="ml-1">{data.desa}</span>
              </p>
              <p className="flex flex-wrap text-xs lg:text-base">
                <span>{data.kecamatan}</span>{" "}
                <span className="ml-1">{data.kabupaten}</span>{" "}
                <span className="ml-1">{data.provinsi}</span>{" "}
                <span className="ml-1">{data.kode_pos}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bagian kanan (navigasi dan media sosial) */}
        <div className="mb-8 flex flex-col lg:flex-row lg:space-x-16 lg:mb-0">
          {/* Tautan navigasi lainnya */}
          <div>
            <h4 className="font-bold mb-2 text-sm lg:text-base lg:mb-4">
              Perusahaan
            </h4>
            <ul>
              <li className="mb-2 text-xs lg:text-base">
                <Link to="/perusahaan" className="hover:underline">
                  Tentang Kami
                </Link>
              </li>
              <li className="mb-2 text-xs lg:text-base">
                <Link to="/konten" className="hover:underline">
                  Konten
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-sm lg:text-base lg:mb-4">
              Bergabung
            </h4>
            <ul>
              <li className="mb-2 text-xs lg:text-base">
                <Link to="/karir" className="hover:underline">
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-sm lg:text-base lg:mb-4">
              Hubungi Kami
            </h4>
            <ul>
              <li className="text-xs lg:mb-2 lg:text-base">
                <Link to="/bantuan" className="hover:underline">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 mt-2 text-xs lg:text-base lg:mb-4 lg:mt-0">
              Ikuti Kami
            </h4>
            <div className="flex space-x-2 lg:space-x-4">
              <a href="#">
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </a>
              <a href="#">
                <img src={X} alt="X" className="w-4 h-4 lg:w-6 lg:h-6" />
              </a>
              <a href="#">
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </a>
              <a href="#">
                <img
                  src={Tiktok}
                  alt="Tiktok"
                  className="w-4 h-4 lg:w-6 lg:h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
