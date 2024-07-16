import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-400">
      <div>
        <h1 className="text-green-600 text-2xl pl-4 font-bold">
          React Practice
        </h1>
        <p className="py-4 ml-3">
          Aliquid eligendi recusandae nemo assumenda aperiam, dolores tenetur,
          cumque, dolorum ea fugit non aliquam? Dolores, necessitatibus numquam!
        </p>
        <div className="flex justify-between md:w-[75%] my-6 ml-3">
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitterSquare />
            <FaGithubSquare />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
            <h2 className="text-green-500">Front End</h2>
            <ul>
                <li>Angular</li>
                <li>React</li>
                <li>NextJs</li>
            </ul>
        </div>

        <div>
            <h2 className="text-green-500">Back End</h2>
            <ul>
                <li>Node</li>
                <li>Express</li>
                <li>NPM</li>
            </ul>
        </div>

        <div>
            <h2 className="text-green-500">Database</h2>
            <ul>
                <li>MangoDB</li>
                <li>MySql</li>
                <li>NOSql</li>
            </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
