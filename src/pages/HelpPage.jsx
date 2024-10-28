// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import HelpPageImage from "../assets/images/help-page-image.png";
import ChevronDown from "../assets/images/chevron-down.svg";
import ContactForm from "../components/ContactFrom";

const HelpPage = () => {
  // Data untuk pertanyaan dan jawaban
  const faqData = [
    {
      question: "Apa itu SEREHGROW?",
      answer: `SEREHGROW adalah aplikasi manajemen terpadu yang dirancang
      khusus untuk membantu petani dan pengelola perkebunan serehwangi
      dalam mengoptimalkan setiap aspek proses produksi, mulai dari
      perencanaan dan pengelolaan lahan hingga proses penyulingan
      minyak atsiri. Aplikasi ini menawarkan fitur-fitur canggih yang
      mempermudah pencatatan data, pemantauan pertumbuhan tanaman,
      analisis hasil panen, dan manajemen produksi penyulingan,
      sehingga memungkinkan pengguna untuk meningkatkan efisiensi,
      kualitas, dan produktivitas secara keseluruhan.`,
    },
    {
      question: "Apa saja produk SEREHGROW?",
      answer: "Minyak Atsiri dan Geraniol",
    },
    {
      question:
        "Saya ingin mengajukan kerja sama dengan SEREHGROW, bagaimana caranya?",
      answer:
        "Anda bisa menghubungi kami lewat kontak yang ada di halaman kontak.",
    },
  ];

  // State untuk mengontrol tampilan teks
  const [visibleContentIndex, setVisibleContentIndex] = useState(null);

  // Fungsi untuk toggle konten
  const toggleContentVisibility = (index) => {
    setVisibleContentIndex(visibleContentIndex === index ? null : index);
  };

  return (
    <>
      <HeroSection
        heroSectionImage={HelpPageImage}
        text={
          <>
            Butuh Bantuan ?
            <br />
            Temukan Solusi Cepat
            <br />
            Dan Mudah Dipusat Bantuan Kami
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
        scrollTarget1="#help"
      />
      <div className="flex flex-col md:flex-row gap-5 px-12 mt-16" id="help">
        <div className="w-full md:w-1/5">
          <p className="text-xl font-bold">
            Inilah beberapa pertanyaan yang sering ditanyakan
          </p>
        </div>
        <div className="w-full md:w-4/5 mt-5 md:mt-0">
          <div className="flex justify-between">
            <p className="font-semibold">General Info</p>
            <p className="font-semibold text-green-800">Hide All</p>
          </div>
          <hr className="border-t-2 border-gray-300 mt-2" />
          <div className="space-y-3 mt-5">
            {faqData.map((item, index) => (
              <div key={index}>
                <div
                  className="p-3 bg-gray-300 w-50 md-w rounded-md flex justify-between cursor-pointer"
                  onClick={() => toggleContentVisibility(index)}
                >
                  <p>{item.question}</p>
                  <img
                    src={ChevronDown}
                    alt="Toggle Answer"
                    style={{ filter: "invert(1)" }}
                  />
                </div>
                {visibleContentIndex === index && (
                  <p className="text-justify mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center">
        <p className="text-xl font-semibold mb-5">
          Posisi kantor kami saat ini
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4679225240393!2d107.6633870444969!3d-6.953999582143049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8268f77caa7%3A0xee575e90de6304c6!2sJl.%20Saturnus%20Sel.%20II%20No.10%2C%20Margasari%2C%20Kec.%20Buahbatu%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040286!5e0!3m2!1sid!2sid!4v1726734489735!5m2!1sid!2sid"
          className="border-0 w-11/12 h-64 sm:h-80 md:w-[700px] md:h-[400px] lg:w-[1100px] lg:h-[500px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ContactForm />
    </>
  );
};

export default HelpPage;
