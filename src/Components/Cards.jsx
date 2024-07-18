import React from "react";
import BlackCar2 from "../assets/newblackcar.png";
import YellowCar from "../assets/yellowcar.png";
import RacingCar from "../assets/racingcar.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cards = () => {
  const notify = () => toast("Buying this car!" );   //for react toast function
  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
     
        <div className="w-full shadow-2xl flex flex-col p-5 my-4 rounded-lg items-center justify-center ">
          <img className="w-50 h-40 object-contain bg-white hover:scale-105" src={BlackCar2} alt="" />
          <h2 className="text-2xl font-bold text-center">Black Car</h2>
          <p>Price: $250,000</p>
          <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 hover:scale-105" onClick={notify}>
            BUY NOW
          </button>
          <ToastContainer position="top-left"/>
        </div>

        <div className="w-full shadow-2xl flex flex-col p-5 my-4 rounded-lg items-center justify-center ">
          <img className="w-50 h-40 object-contain bg-white hover:scale-105" src={YellowCar} alt="" />
          <h2 className="text-2xl font-bold text-center">Yellow Car</h2>
          <p>Price: $350,000</p>
          <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 hover:scale-105">
            BUY NOW
          </button>
        </div>

        <div className="w-full shadow-2xl flex flex-col p-5 my-4 rounded-lg items-center justify-center ">
          <img className="w-50 h-40 object-contain bg-white hover:scale-105" src={RacingCar} alt="" />
          <h2 className="text-2xl font-bold text-center">Racing Car</h2>
          <p>Price: $550,000</p>
          <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 hover:scale-105">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
