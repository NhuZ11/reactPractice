import React from "react";
import BlackCar2 from "../assets/newblackcar.png";
import YellowCar from "../assets/yellowcar.png";
import RacingCar from "../assets/racingcar.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  let carsData = [
    {
      name: "Black Car",
      price: "500,000",
      img: BlackCar2,
    },
    {
      name: "Yellow Car",
      price: "600,000",
      img: YellowCar,
    },
    {
      name: "Super Car",
      price: "900,000",
      img: RacingCar,
    },
  ];

  return (
    <div className="w-full py-[10rem] px-4 bg-white text-black">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-[-100px]">
        {carsData.map((val) => {
          return <ShowCards imgSrc={val.img} name={val.name} price={val.price}></ShowCards>;
        })}
      </div>
    </div>
  );
};
function ShowCards({ imgSrc,name,price }) {
  const notify = () => toast("Buying this car!"); //for react toast function
  return (
    <div className="w-full shadow-2xl flex flex-col p-5 my-4 rounded-lg items-center justify-center ">
      <img
        className="w-50 h-40 object-contain bg-white hover:scale-105"
        src={imgSrc}
        alt=""
        style={{ transition: "0.2s ease", cursor: "pointer" }}
      />
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <p>Price: ${price}</p>
      <button
        className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 hover:scale-105"
        onClick={notify}
      >
        BUY NOW
      </button>
      <ToastContainer position="top-left" />+
    </div>
  );
}
export default Cards;
