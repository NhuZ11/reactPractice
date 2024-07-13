import React from "react";
import { ReactTyped } from "react-typed";
import Gengar from "../assets/download.jpg";
import Car from "../assets/car.png";

export default function Homepage() {
  return (
    <div className="text-white">
      <div className="mt-4 text-center flex flex-col justify-center">
        <p className="md:text-6xl sm:text-5xl text-4xl font-bold text-center">
          This is the home page
        </p>
        <h1 className="text-green-500 text-4xl font-bold p-2 uppercase">
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
        <div className="max-w-[1000px] mx-auto grid ">
          <img src={Car} alt="" />
          <div>
            <p className="text-red-700">Using Image in react</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta,
              sint. Error incidunt unde quo et odio, dolore s debitis. Non
              neque, incidunt illo tenetur sequi minim a impedit repelle ndus
              nulla soluta delectus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              voluptatem saepe eligendi, sequi rerum excepturi amet ipsum rem
              modi totam quod inventore suscipit debitis quibusdam tenetur
              sapiente blanditiis porro nemo?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              tenetur maiores, tempora, dolores magni deserunt perspiciatis, nam
              libero facere recusandae at assumenda molestias quidem
              accusantium. Vitae facilis adipisci asperiores dignissimos?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
