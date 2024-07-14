import React from "react";
import { ReactTyped } from "react-typed";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 bg-gray-300 rounded-md p-5">
        <div className="lg:col-span-2 mx-3">
          <h1 className="md:text-4xl sm:text-3xl text-2xl uppercase text-green-500 font-bold">
            {" "}
            <ReactTyped
              strings={[
                "Want to Know More",
              ]}
              typeSpeed={40}
              backSpeed={70}
              loop
            />
          </h1>
          <p className="text-black text-xl">
            Keep checking progress of my practice
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="ml-3 w-full p-3 flex rounded-md text-black"
              type="email"
              placeholder="Enter Your Email Address"
            />
            <button className="bg-green-500 w-[180px] rounded-md font-medium mx-auto ml-3 my-3 py-2">
              Submit
            </button>
          </div>
          <p className="text-black ml-4">We care about your privacy. Check Our <span className="text-green-500">Privacy policy </span> </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
