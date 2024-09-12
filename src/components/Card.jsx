// eslint-disable-next-line no-unused-vars
import React from 'react';
import Furnace from "../assets/images/furnace.png";

const Card = () => {
  return (
    <div className="flex flex-col hover:cursor-pointer bg-white drop-shadow-xl items-center justify-center w-80 h-72 p-4 rounded-xl">
        <img src={Furnace} alt="" className="w-80 h-64 mb-4" />
        <p className="text-center text-black font-semibold">Tungku Penyulingan</p>
    </div>
  )
}

export default Card;
