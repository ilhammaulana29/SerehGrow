// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Logo.png";
import chevronDown from "../assets/images/chevron-down.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Toggle hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // event untuk deteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Tutup dropdown dan menu saat halaman berpindah
  useEffect(() => {
    setIsDropdownOpen(false); // Tutup dropdown
    setIsOpen(false); // Tutup hamburger menu
    window.scrollTo(0, 0); // Scroll ke atas halaman
  }, [location]);

  return (
    <nav
      className={`border-gray-200 fixed top-0 left-0 w-full z-30 transition-colors duration-800 ${
        isScrolled ? "bg-greenPrimer" : "bg-transparent"
      }`}
    >
      <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 lg:w-40 w-24 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </Link>

        {/* Hamburger menu button for small screens */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links for larger screens */}
        <div className="hidden md:flex space-x-16 rtl:space-x-reverse">
          {/* Dropdown for Tentang Kami */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className={`py-2 px-3 rounded text-xl flex items-center ${
                location.pathname === "/#"
                  ? "text-white md:bg-transparent md:text-white font-semibold"
                  : "text-white hover:text-gray-100 md:text-white"
              }`}
            >
              Tentang Kami
              <img src={chevronDown} alt="" className="ml-2 mt-2 w-3 h-3" />
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg w-40">
                <Link
                  to="/perusahaan"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Perusahaan
                </Link>
                <Link to="/mitra" className="block px-4 py-2 hover:bg-gray-200">
                  Mitra
                </Link>
                <Link to="/#" className="block px-4 py-2 hover:bg-gray-200">
                  Lainnya
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/budidaya"
            className={`py-2 px-3 rounded text-xl ${
              location.pathname === "/budidaya"
                ? "text-white md:bg-transparent md:text-white font-semibold"
                : "text-white hover:text-gray-100 md:text-white"
            }`}
          >
            Budidaya
          </Link>
          <Link
            to="/galeri"
            className={`py-2 px-3 rounded text-xl ${
              location.pathname === "/galeri"
                ? "text-white md:bg-transparent md:text-white font-semibold"
                : "text-white hover:text-gray-100 md:text-white"
            }`}
          >
            Galeri
          </Link>
          <Link
            to="/produk"
            className={`py-2 px-3 rounded text-xl ${
              location.pathname === "/produk"
                ? "text-white md:bg-transparent md:text-white font-semibold"
                : "text-white hover:text-gray-100 md:text-white"
            }`}
          >
            Produk
          </Link>
          <Link
            to="/bantuan"
            className={`py-2 px-3 rounded text-xl ${
              location.pathname === "/bantuan"
                ? "text-white md:bg-transparent md:text-white font-semibold"
                : "text-white hover:text-gray-100 md:text-white"
            }`}
          >
            Bantuan
          </Link>
        </div>
      </div>

      {/* Fullscreen menu for small screens */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black z-20 flex flex-col items-start p-4 space-y-2">
          <button onClick={toggleMenu} className="self-end text-black">
            {/* Close Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </Link>
          <Link to="/kontak" className="block py-2 px-4 hover:bg-gray-700">
            Kontak
          </Link>
          <div>
            <button
              onClick={toggleDropdown}
              className="py-2 px-4 flex items-center"
            >
              Tentang Kami
              <img
                src={chevronDown}
                alt=""
                className="ml-2 w-3 h-3 filter invert"
              />
            </button>
            {isDropdownOpen && (
              <div className="ml-5">
                <Link to="/perusahaan" className="block px-4 py-2 hover:bg-gray-200">
                  Perusahaan
                </Link>
                <Link to="/mitra" className="block px-4 py-2 hover:bg-gray-200">
                  Mitra
                </Link>
                <Link to="#" className="block px-4 py-2 hover:bg-gray-200">
                  Lainnya
                </Link>
              </div>
            )}
          </div>
          <Link to="/budidaya" className="block py-2 px-4 hover:bg-gray-700">
            Budidaya
          </Link>
          <Link to="/galeri" className="block py-2 px-4 hover:bg-gray-700">
            Galeri
          </Link>
          <Link to="/produk" className="block py-2 px-4 hover:bg-gray-700">
            Produk
          </Link>
          <Link to="/bantuan" className="block py-2 px-4 hover:bg-gray-700">
            Bantuan
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
