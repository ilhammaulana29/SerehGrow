/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../components/HeroSection";
import Modal from "../components/modal";
import ProductPageImage from "../assets/images/product-page-image.png";
import ProductImage from "../assets/images/product.png";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";
import { useState } from "react";

const ProductPage = () => {
  const [isSitronelalModalOpen, setIsSitronelalModalOpen] = useState(false);
  const handleSitronelalClick = () => {
    setIsSitronelalModalOpen(true);
  };
  const [isGraniolModalOpen, setIsGraniolModalOpen] = useState(false);
  const handleGraniolClick = () => {
    setIsGraniolModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsSitronelalModalOpen(false);
    setIsGraniolModalOpen(false);
  };

  return (
    <>
      <HeroSection
        heroSectionImage={ProductPageImage}
        text={
          <>
            Produk Mengandung Geraniol Dan Minyak Atsiri
            <br />
            Kualitas Sereh Wangi Terbaik
            <br />
            Untuk Kesehantan Dan Kecantikan Alami
          </>
        }
        showButton1={true}
        buttonText1="Selengkapnya"
      />
      <div className="lg:px-12 px-4 mt-10">
        <p className="lg:text-2xl text-xl text-center lg:text-left text-green1 font-bold">
          PRODUK YANG DIHASILKAN SEREH WANGI
        </p>
        <div className="flex lg:flex-row flex-col space-x-10 bg-gray-100 p-10 mt-8">
          <div className="lg:w-3/12">
            <img src={ProductImage} alt="" />
          </div>
          <div className="lg:w-9/12">
            <p className="text-lg text-green1 font-bold text-justify">
              Kandungan Minyak Atsiri Pada Sereh Wangi
            </p>
            <div className="text-green1 font-medium space-y-5">
              <p>
                Dalam minyak atsiri sereh wangi, sitronelal dan geraniol sering
                bekerja secara sinergis, memberikan kombinasi aroma yang
                kompleks dan menyenangkan serta meningkatkan efikasi dalam
                aplikasi tertentu:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  Aroma Kombinasi: Sitronelal memberikan aroma segar dan citrus
                  yang kuat, sementara geraniol menambah kelembutan dan sentuhan
                  floral pada minyak atsiri. Kombinasi ini menciptakan aroma
                  yang seimbang dan disukai dalam berbagai produk wewangian.
                </li>
                <li>
                  Efek Repelan: Kedua senyawa ini juga bekerja sama dalam
                  memberikan efek repelent terhadap serangga. Kombinasi
                  sitronelal dan geraniol sering ditemukan dalam produk
                  anti-nyamuk alami yang lebih efektif dibandingkan penggunaan
                  salah satu komponen saja.
                </li>
              </ul>
              <div className="flex space-x-3 lg:justify-end justify-center">
                <div className="lg:w-8 lg:h-8 w-5 h-5 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
                  <img
                    src={ChevronLeft}
                    alt="Previous"
                    className="lg:w-2 lg:h-4 w-2 h-3"
                  />
                </div>
                <div className="lg:w-8 lg:h-8 w-5 h-5 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
                  <img
                    src={ChevronRight}
                    alt="Next"
                    className="lg:w-2 lg:h-4 w-2 h-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-10 mt-10">
          <div
            className="bg-white inline-block drop-shadow-md p-5 space-y-10 h-full min-h-[250px]" // Menambahkan min-h dan h-full
            onClick={handleSitronelalClick}
          >
            <p className="text-greenPrimer text-2xl font-bold text-center">
              40% <br />
              SITRONELAL
            </p>
            <p className="text-green2 lg:text-left text-center">
              Kebutuhan Sitronelal <br /> Dalam dunia kosmetik
            </p>
          </div>
          <div
            className="bg-white inline-block drop-shadow-md p-5 space-y-10 h-full min-h-[250px]" // Menambahkan min-h dan h-full
            onClick={handleGraniolClick}
          >
            <p className="text-greenPrimer text-2xl font-bold text-center">
              40% <br />
              GRANIOL
            </p>
            <p className="text-green2 lg:text-left text-center">
              Kebutuhan Graniol <br /> Dalam dunia kosmetik
            </p>
          </div>
        </div>

        <div className="flex-col mb-10">
          <div className="bg-white drop-shadow-md mt-10 p-5">
            <div className="flex lg:flex-row flex-col lg:space-x-10 space-y-5 lg:space-y-0 justify-center items-center">
              <div className="lg:w-2/12 w-44 flex-shrink-0">
                <img src={ProductImage} alt="" />
              </div>
              <div className="lg:w-9/12 space-y-5 text-center lg:text-left">
                <p className="font-bold text-greenPrimer">Minyak Sereh Wangi</p>
                <p className="text-green2">
                  Deskripsi tentang produk sereh <br />
                  wangi seperti dari jenis sereh apa
                </p>
                <p className="text-greenPrimer font-bold">
                  Harga/ml :Rp.000.000
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white drop-shadow-md mt-10 p-5">
            <div className="flex lg:flex-row flex-col lg:space-x-10 space-y-5 lg:space-y-0 justify-center items-center">
              <div className="w-2/12 w-44 flex-shrink-0">
                <img src={ProductImage} alt="" />
              </div>
              <div className="lg:w-9/12 space-y-5 text-center lg:text-left">
                <p className="font-bold text-greenPrimer">Minyak Sereh Wangi</p>
                <p className="text-green2">
                  Deskripsi tentang produk sereh <br />
                  wangi seperti dari jenis sereh apa
                </p>
                <p className="text-greenPrimer font-bold">
                  Harga/ml :Rp.000.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isSitronelalModalOpen}
        onClose={handleCloseModal}
        className="w-full"
      >
        <div
          className="flex flex-col-reverse lg:flex-row mx-auto w-full pt-10 lg:pt-28 px-4 lg:px-12 space-y-6 lg:space-y-0 lg:space-x-6"
          id="serehwangi"
        >
          {/* left side : text */}
          <div className="flex-1 lg:basis-5/12">
            <h2 className="text-green1 text-3xl font-bold text-center lg:text-left mt-3 lg:mt-0">
              SITRONELAL
            </h2>
            <p className="mt-4 text-gray-700 text-lg text-justify">
              Sitronelal adalah salah satu senyawa terpenting dalam minyak
              atsiri sereh wangi. Senyawa ini merupakan monoterpenoid aldehida
              yang memiliki karakteristik aroma yang seger dan menyerupai lemon,
              sehingga sering digunakan dalam industri wewangian dan produk
              kebersihan. Hasil Tes Lab.
            </p>
            <br />
            <p>Struktur Kimia:</p>
            <ul className="list-disc pl-5">
              <li>Rumus kimia : C10H180</li>
              <li>
                Struktur kimianya terdiri dari rantai karbon yang berujung pada
                gugus aldehida, yang memberikan sifat reaktif dan aroma khas
                pada sitronelal.
              </li>
            </ul>
            <br />
            <p>Kegunaan Utama:</p>
            <ul className="list-disc pl-5">
              <li>
                Aromaterapi dan Parfum: Sitronelal banyak digunakan dalam
                formulasi parfum dan minyak aromaterapi karena aroma citrusnya
                yang menyegarkan dan menenangkan. Senyawa ini mampu memberikan
                efek relaksi sehingga sering dimanfaatkan dalam produk yang
                bertujuan untuk mengurangi stres dan meningkatkan suasana hati
              </li>
              <br />
              <li>
                Repelan Serangga: Sitronelal dikenal sebagai salah satu bahan
                aktif dalam produk anti-serangga alami. Aroma sitronelal efektif
                dalam mengusir nyamuk dan serangga lainya, menjadikannya pilihan
                yang populer dalam pembuatan lotion anti-nyamuk, lilin
                aromaterapi, dan produk serupa.
              </li>
              <br />
              <li>
                Bahan Pengawetndan Antimikroba: Karena memiliki sifat
                antimikroba yang baik, sitronelal digunakan sebagai bahan
                pengawet alami dalam produk kosmetik dan pembersih. Senyawa ini
                efektif dalam menghambat pertumbuhan mikroorganisme tertentu,
                sehingga memperpanjang umur simpan produk.
              </li>
              <br />
              <p>Manfaat Kesehatan:</p>
              <li>
                Antiinflamasi: Penelitian menunjukkan bahwa sitronelal memiliki
                potensi sebagai agen antiinflamasi yang bisa mengurangi
                peradangan dan bengkak, baik untuk penggunaan topikal maupun
                dalam bentuk inhalasi
              </li>
              <br />
              <li>
                Antijamur dan Antibakteri: Sitronelal efektif melawan bebragai
                jenis jamur dan bakteri, menjadikannya komponen penting dalam
                pengobatan inteksi kulit dan produk kebersihan.
              </li>
              <br />
              <p>Sereh Grow, Hasilkan Minyak Atsiri</p>
              <p>Kembali</p>
            </ul>
          </div>
          {/* right side : image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <img
                src={ProductImage}
                alt="Sereh Wangi"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isGraniolModalOpen}
        onClose={handleCloseModal}
        className="w-full"
      >
        <div
          className="flex flex-col-reverse lg:flex-row mx-auto w-full pt-10 lg:pt-28 px-4 lg:px-12 space-y-6 lg:space-y-0 lg:space-x-6"
          id="serehwangi"
        >
          {/* left side : text */}
          <div className="flex-1 lg:basis-5/12">
            <h2 className="text-green1 text-3xl font-bold text-center lg:text-left mt-3 lg:mt-0">
              GERANIOL
            </h2>
            <p className="mt-4 text-gray-700 text-lg text-justify">
              Geraniol adalah senyawa monoterpenoid alkohol yang juga ditemukan
              dalam minyak atsiri sereh wangi. Geraniol dikenal dengan aroma
              floral yang lembut dan manis, menyerupai mawar, dan sangat
              dihargai dalam industri perfum dan kosmetik. Hasil Tes Lab
            </p>
            <br />
            <p>Struktur Kimia:</p>
            <li>Rumus kimia: C10H180</li>
            <li>
              Geraniol memiliki struktur kimia berupa rantai karbon dengan gugus
              hidroksil (-OH) yang memberikan sifat alkohol dan berperan dalam
              kestabilan serta aroma senyawa ini.
            </li>
            <br />
            <p>Kegunaan Utama:</p>
            <li>
              Industri Parfum: Geraniol adalah salah satu bahan baku utama dalam
              pembuatan parfum, terutama untuk wewangian dengan nuasa floral.
              Aromanya yang lembut dan manis sering digunakan sebagai komponen
              dasar dalam berbagai parfum kelas atas.
            </li>
            <br />
            <li>
              Pewarna Makanan dan Minuman: Selain dalam industri pafum, geraniol
              juga digunakan sebagai bahan tambahan dalam makanan dan minuman
              untuk memberikan aroma yang menyegarkan dan menggugah selera.
            </li>
            <br />
            <li>
              Kosmetik dan Produk Perawatan Kulit: Geraniol sering ditemukan
              dalam produk kosmetik seperti krim, losion, dan produk perawatan
              rambut. Sifatnya yang lembut dan aroma khasnya menjadikan geraniol
              sebagai pilihan populer dalam produk-produk yang memberikan
              sentuhan elegan dan alami.
            </li>
            <br />
            <p>Manfaat Kesehatan:</p>
            <li>
              Antioksida Geraniol dikenal sebagai antioksidan yang efektif, yang
              berarti senyawa ini dapat melindungi sel-sel tubuh dari kerusakan
              akibat radikal bebas. Antioksidan dalam geraniol membantu dalam
              menjaga kesehatan kulit dan mencegah penuaan dini.
            </li>
            <br />
            <li>
              Antikanker: Beberapa penelitian menunjukkan bahwa geraniol
              memiliki potensi antikanker. Senyawa ini mampu menghambat
              proliferasi sel kanker dan mendorong apoptosis (kematian sel
              terprogam) pada beberapa jenis kanker.
            </li>
            <br />
            <li>
              Antibakteri dan Antijamur: Geraniol juga memiliki sifat
              antibakteri dan antijamur yang kuat, menjadikannya bahan penting
              dalam pengobatan infeksi kulit dan penggunaan dalam produk
              kesehatan mulut.
            </li>
            <br />
            <p>Sereh Grow, Hasilkan Minyak Atsiri</p>
            <p>Kembali</p>
          </div>
          {/* right side : image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <img
                src={ProductImage}
                alt="Sereh Wangi"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductPage;
