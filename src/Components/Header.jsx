import React, { useState } from "react";
import Homepage from "../Pages/Homepage";
import Explore from "../Pages/Explore";


export default function Header() {
  const [currentTab, setTab] = useState("home");

  return (
    <div>
      <nav className="flex justify-between items-center h-12 text-white">
        <h1 className="text-green-600 text-2xl pl-4 font-bold">React Practice</h1> 
        <ul className="flex">
          <li className="p-4" onClick={() => setTab("home")}>Home</li>
          <li className="p-4" onClick={() => setTab("explore")}>Explore</li>
          <li className="p-4" onClick={() => setTab("about us")}>About Us</li>
          <li className="p-4" onClick={() => setTab("contact")}>Contact Us</li>
        </ul>
      </nav>
      {
          currentTab=="home" &&
          <div>
            <Homepage />
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
            <h1 className="text-white">About Us Section</h1>
          </div>
        }
        {
          currentTab=="contact" &&
          <div>
            <h1 className="text-white">Contact Us Section</h1>
          </div>
        }
    </div>
  );
}
