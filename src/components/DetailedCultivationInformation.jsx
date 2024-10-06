import React from "react";

const DetailedCultivationInformation = ({ description, sections, imageUrl, altText }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center items-center space-y-10 lg:px-12 px-4 lg:space-x-10 lg:my-20 my-4 p-5">
      {/* Bagian Teks */}
      <div className="lg:w-9/12 space-y-5 text-justify">
        {/* Bagian Deskripsi Umum */}
        <div className="description-section">
          <p className="text-xl text-green1 font-bold">{description}</p>
        </div>

        {/* Bagian yang Berisi List Dinamis */}
        {sections.map((section, index) => (
          <div key={index} className="text-lg text-green1 font-medium">
            <h3>{section.title}</h3>
            <ul className="list-disc pl-5 space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bagian Gambar */}
      {imageUrl && (
        <div className="lg:w-4/12 w-full">
          <img src={imageUrl} alt={altText} className="w-full h-60 lg:w-96 lg:h-[500px] rounded-md object-cover mb-5 lg:mb-0" />
        </div>
      )}
    </div>
  );
};

export default DetailedCultivationInformation;
