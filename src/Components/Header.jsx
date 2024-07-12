import React, { useState } from "react";
import Homepage from "../Pages/Homepage";
import Explore from "../Pages/Explore";


export default function Header() {
  const [currentTab, setTab] = useState("home");

  return (
    <div>
      <nav className="navBar">
        Logo  
        <ul>
          <li onClick={() => setTab("home")}>Home</li>
          <li onClick={() => setTab("explore")}>Explore</li>
          <li onClick={() => setTab("about us")}>About Us</li>
          <li onClick={() => setTab("contact")}>Contact Us</li>
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
            <h1>About Us Section</h1>
          </div>
        }
        {
          currentTab=="contact" &&
          <div>
            <h1>Contact Us Section</h1>
          </div>
        }
    </div>
  );
}
