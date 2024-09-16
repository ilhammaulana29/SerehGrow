// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/images/Logo.png";
import Instagram from "../assets/images/instagram.png";
import Facebook from "../assets/images/facebook.png";
import X from "../assets/images/x.png";
import Tiktok from "../assets/images/tiktok.png";
import Farmer from "../assets/images/farmer.png";

const Footer = () => {
  return (
    <footer className="bg-greenPrimer text-white py-8 lg:py-20 relative">
      {/* Butuh Bantuan Section */}
      <div className="flex items-center space-x-2 w-32 lg:w-52 lg:p-1 rounded-full bg-white absolute top-[-40px] left-0 lg:top-[-40px] lg:left-12 m-5">
        <div className="bg-gray-300 w-8 h-8 lg:w-12 lg:h-12 rounded-full">
          <img src={Farmer} alt="Petani" className="w-8 h-8 lg:w-12 lg:h-12" />
        </div>
        <a
          href="#"
          className="hover:underline font-semibold lg:font-bold text-greenPrimer text-[10px] lg:text-lg"
        >
          Butuh Bantuan ?
        </a>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-4 lg:px-8">
        {/* Bagian kiri (logo, alamat, informasi perusahaan) */}
        <div className="mb-5 lg:mb-0">
          <img src={logo} alt="Logo" className="mb-3 w-24 lg:mb-5 lg:w-40" />
          <p className="mb-0 text-xs font-semibold lg:mb-3 lg:text-base">
            PT CAKRAWALA GLOBAL INFORMATIKA
          </p>
          <p className="text-xs lg:text-base">
            Jl. Saturnus Sel. I No.10, Margasari, Kec. Buahbatu,
          </p>
          <p className="text-xs lg:text-base">Kota Bandung, Jawa Barat 40286</p>
        </div>

        {/* Bagian Kanan */}
        <div className="mb-8 flex flex-col lg:flex-row lg:space-x-16 lg:mb-0">
          <div>
            <h4 className="font-bold mb-2 text-sm lg:text-base lg:mb-4">
              Perusahaan
            </h4>
            <ul>
              <li className="mb-2 text-xs lg:text-base">
                <a href="/perusahaan" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li className="mb-2 text-xs lg:text-base">
                <a href="/konten" className="hover:underline">
                  Konten
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-sm lg:text-base lg:mb-4">
              Bergabung
            </h4>
            <ul>
              <li className="mb-2 text-xs lg:text-base">
                <a href="#" className="hover:underline">
                  Karir
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-sm lg:text-base lg:mb-4">
              Hubungi Kami
            </h4>
            <ul>
              <li className="text-xs lg:mb-2 lg:text-base">
                <a href="/bantuan" className="hover:underline">
                  Kontak
                </a>
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
