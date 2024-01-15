import React, { useState } from "react";
import closeNavBarIcon from "../assets/icons/close-nav-bar.svg";

function DrawerNavigation(props) {
  const sideBarHandler = props.sideBarHandler;
  const headerMenu = props.headerMenu;
  const handleClick = props.handleClick;

  const preventClose = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-100"
      onClick={sideBarHandler}
    >
      <div
        className="block sm:hidden bg-gray-800 text-white w-64 h-full fixed top-0 left-0 overflow-y-auto z-10"
        onClick={preventClose}
      >
        <div
          className="flex justify-center p-5 border-b-2 border-gray-400"
          onClick={sideBarHandler}
        >
          <img className="w-4" src={closeNavBarIcon} alt="close-nav-bar-icon" />
        </div>
        <nav className="p-4 space-y-4 ">
          {headerMenu.map((menuItem) => (
            <a
              key={menuItem.id}
              className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
              onClick={() => {
                sideBarHandler();
                handleClick(menuItem.code);
              }}
            >
              {menuItem.label}
            </a>
          ))}
        </nav>
      </div>{" "}
    </div>
  );
}

export default DrawerNavigation;
