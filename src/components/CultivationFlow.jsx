// eslint-disable-next-line no-unused-vars
import React from "react";
import Card from "./Card";
import cultivationFlowFirst from "../assets/images/cultivation-flow-1.svg";
import cultivationFlowSecond from "../assets/images/cultivation-flow-2.svg";
import cultivationFlowThird from "../assets/images/cultivation-flow-3.svg";
import cultivationFlowFourth from "../assets/images/cultivation-flow-4.svg";
import cultivationFlowFiveth from "../assets/images/cultivation-flow-5.svg";

const CultivationFlow = () => {
  return (
    <div className="flex flex-col px-4 lg:px-12 py-12 mx-auto w-full" id="alurbudidaya">
      <h2 className="text-green1 text-3xl font-bold mt-2 text-center lg:text-left lg:mt-10 ">
        Seberapa Mudah Budidaya Sereh Wangi?
      </h2>
      
      {/* Wrapper untuk membuat scrollable dengan ukuran card tetap */}
      <div className="flex mt-5 space-x-4 lg:space-x-6 overflow-x-auto p-3">
        <Card
          className="w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 bg-green3 hover:bg-green-200 drop-shadow-lg"
          cardImage={cultivationFlowFirst}
          classNameCardImage="mb-4"
          classNameCardText="text-green1 font-bold"
          textContent="Pemilihan Bibit"
        />
        <Card
          className="w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 bg-green3 drop-shadow-lg"
          cardImage={cultivationFlowSecond}
          classNameCardImage="mb-4"
          classNameCardText="text-green1 font-bold"
          textContent="Lahan"
        />
        <Card
          className="w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 bg-green3 drop-shadow-lg"
          cardImage={cultivationFlowThird}
          classNameCardImage="mb-4"
          classNameCardText="text-green1 font-bold"
          textContent="Perawatan"
        />
        <Card
          className="w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 bg-green3 drop-shadow-lg"
          cardImage={cultivationFlowFourth}
          classNameCardImage="mb-4"
          classNameCardText="text-green1 font-bold"
          textContent="Masa Panen"
        />
        <Card
          className="w-40 h-40 lg:w-56 lg:h-56 flex-shrink-0 bg-green3 drop-shadow-lg"
          cardImage={cultivationFlowFiveth}
          classNameCardImage="mb-4"
          classNameCardText="text-green1 font-bold"
          textContent="Penyulingan"
        />
      </div>
    </div>
  );
};

export default CultivationFlow;
