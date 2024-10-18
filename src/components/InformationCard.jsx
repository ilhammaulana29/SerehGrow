import React from "react";
import ChevronLeft from "../assets/images/chevron-left.png";
import ChevronRight from "../assets/images/chevron-right.png";

const InformationCard = ({ classNameTestimoni, image, classNameTagLine, tagLine, classNameDescription, description, classNameAuthor, author, detailsAuthor, classBtnPrevAndNext="hidden", prevOnClick, nextOnClick }) => {
  return (
    <div className="lg:px-12 px-4 mt-8">
      <p className={`p-3 relative hidden top-7 left-16 lg:inline bg-white text-lg font-semibold text-green1 ${classNameTestimoni}`}>TESTIMONI</p>
      <div className="lg:flex-row flex flex-col lg:p-14 p-5 bg-gray-100 lg:space-x-10 space-y-5">
        <div className="lg:w-3/12 flex justify-center">
          <img src={image} alt="Testimoni" className="w-80 h-72" />
        </div>
        <div className="lg:w-8/12 space-y-5">
          <h3 className={`text-2xl text-green1 font-bold ${classNameTagLine}`}>{tagLine}</h3>
          <p className={`text-xl text-green1 font-medium text-justify ${classNameDescription}`}>
            {description}
          </p>
          <div className={`text-green1 ${classNameAuthor}`}>
            <p>{author}</p>
            <p>{detailsAuthor}</p>
          </div>
          <div className={`space-x-3 lg:justify-end justify-center ${classBtnPrevAndNext}`}>
            <div onClick={prevOnClick} className="lg:w-8 lg:h-8 w-5 h-5 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
              <img src={ChevronLeft} alt="Previous" className="lg:w-2 lg:h-4 w-2 h-3" />
            </div>
            <div onClick={nextOnClick} className="lg:w-8 lg:h-8 w-5 h-5 drop-shadow-lg bg-green1 hover:bg-greenPrimer rounded-full flex items-center justify-center hover:cursor-pointer">
              <img src={ChevronRight} alt="Next" className="lg:w-2 lg:h-4 w-2 h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
