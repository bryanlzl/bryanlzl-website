import React, { useState } from "react";
import closeNavBarIcon from "../assets/icons/close-nav-bar.svg";

function DrawerNavigation(props) {
  const sideBarHandler = props.sideBarHandler;

  return (
    <div className="block sm:hidden bg-gray-800 text-white w-64 h-full fixed top-0 left-0 overflow-y-auto z-10">
      <div className="flex justify-center p-5">
        <img
          className="w-4"
          src={closeNavBarIcon}
          onClick={sideBarHandler}
          alt="close-nav-bar-icon"
        />
      </div>
      <nav className="p-4 space-y-4 ">
        <a
          href="#"
          className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
        >
          Expertise
        </a>
        <a
          href="#"
          className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
        >
          Projects
        </a>
        <a
          href="#"
          className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
        >
          Experience
        </a>
        <a
          href="#"
          className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default DrawerNavigation;
