import React from "react";
import Cards from "../Components/Cards";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";

import { Bounce } from "react-toastify";
import Charts from "../Components/Charts";
import Graph from "../Components/Graph";


export default function Explore() {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-3 text-center">Explore</h1>
      <div>
        <Cards />
      </div>


      <div>
        <Footer />
      </div>
    </div>
  );
}
