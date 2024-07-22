import React, { useState } from "react";
import Homepage from "../Pages/Homepage";
import Explore from "../Pages/Explore";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";




export default function Header() {
  const [currentTab, setTab] = useState("home");

  return (
    <div>
      <nav className="flex justify-between items-center h-12 text-white my-3">
        <h1 className="text-green-600 text-4xl pl-4 font-bold">React Practice</h1> 
        <ul className="flex">
          <li className="p-4 text-xl hover:text-black hover:bg-green-400 cursor-pointer" onClick={() => setTab("home")}>Home</li>
          <li className="p-4 text-xl hover:text-black hover:bg-green-400 cursor-pointer" onClick={() => setTab("explore")}>Explore</li>
          <li className="p-4 text-xl hover:text-black hover:bg-green-400 cursor-pointer" onClick={() => setTab("about us")}>About Us</li>
          <li className="p-4 text-xl hover:text-black hover:bg-green-400 cursor-pointer" onClick={() => setTab("contact")}>Contact Us</li>
        </ul>
      </nav>
      {
          currentTab=="home" &&
          <div>
            <Homepage name="NhuZ"/>
          </div>
        }
        {
          currentTab=="explore" &&
          <div>
            <Explore />
           
          </div>
        }
        {
          currentTab=="about us" &&
          <div>
            <h1 className="text-white"><AboutUs /></h1>
          </div>
        }
        {
          currentTab=="contact" &&
          <div>
            <h1 className="text-white"><ContactUs /></h1>
          </div>
        }
    </div>
  );
}
