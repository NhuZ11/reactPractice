import React from "react";
import { ReactTyped } from "react-typed";
import Gengar from "../assets/download.jpg";
import Car from "../assets/car.png";
import NewsLetter from "../Components/NewsLetter";

export default function Homepage() {
  return (
    <div className="text-white">
      <div className="mt-4 text-center flex flex-col justify-center">
        <p className="md:text-6xl sm:text-5xl text-4xl font-bold text-center">
          This is the home page
        </p>
        <h1 className="text-green-500 md:text-4xl sm:text-3xl text-2xl font-bold p-2 uppercase">
          Homepage
        </h1>
        <p className="font-bold text-3xl">
          <ReactTyped
            strings={[
              "I am learning React..",
              "Tailwind is easy, but I am busy.",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>
        <p className="text-gray-500 font-bold">I have yet more to learn.</p>
        <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 ">
          Get Started
        </button>
      </div>
      <div className="w-full ">
        <div className="max-w-[1000px] mx-auto flex items-center ">
          <img src={Car} alt="" className="w-1/2 h-auto" />
          <div className="w-1/2 p-4 text-justify">
            <p className="text-green-500 text-2xl font-bold">
              Using Image in react
            </p>
            <p className="text-3sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt est
              error nobis? Vero corrupti voluptatibus officiis rem sit libero
              quisquam rerum asperiores ipsa. Enim illo natus esse soluta ipsum,
              sint doloribus nesciunt temporibus, tempora veritatis dolor
              aliquid illum! Repellendus est quia officia ut explicabo ducimus
              reiciendis inventore, error aliquam voluptas.
            </p>
            <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 ">Learn More</button>
          </div>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  );
}
