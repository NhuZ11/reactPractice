import React from "react";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

import { Bounce } from "react-toastify";
import Charts from "../Components/Charts";
import Graph from "../Components/Graph";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-3 text-center">Explore</h1>
      <div>
        <Cards />
      </div>
      <div>
        <button className="bg-green-500 w-[130px] rounded-md font-medium mx-auto my-3 py-2 ">
          <Link to="/login">Login</Link>
        </button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
