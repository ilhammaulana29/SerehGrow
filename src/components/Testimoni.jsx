import React from "react";
import TestimoniImage from "../assets/images/testimoni-image.png";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";

const Testimoni = () => {
  return (
    <div className="lg:px-12 px-4 mt-8">
      <p className="p-3 relative hidden top-7 left-16 lg:inline bg-white text-lg font-semibold text-green1">TESTIMONI</p>
      <div className="lg:flex-row flex flex-col lg:p-14 p-5 bg-gray-100 lg:space-x-10 space-y-5">
        <div className="lg:w-3/12 flex justify-center">
          <img src={TestimoniImage} alt="Testimoni" className="w-80 h-72" />
        </div>
        <div className="lg:w-8/12 space-y-10">
          <p className="text-xl text-green1 font-medium text-justify font-mono">
            " Budidaya serehwangi di daerah terasering bisa meningkatkan potensi
            Agrowisata yang mamppu membantu perekonomian masyarakat setempat dan
            membuat desa menjadi lebih maju "
          </p>
          <div className="text-green1 font-mono">
            <p>Nadia Putri</p>
            <p>Petani Sereh Wangi Bogor</p>
          </div>
          <div className="flex space-x-3 lg:justify-end justify-center">
            <div className="lg:w-8 lg:h-8 w-5 h-5 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
              <img src={ChevronLeft} alt="Previous" className="lg:w-2 lg:h-4 w-2 h-3" />
            </div>
            <div className="lg:w-8 lg:h-8 w-5 h-5 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
              <img src={ChevronRight} alt="Next" className="lg:w-2 lg:h-4 w-2 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
