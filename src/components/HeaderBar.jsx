import React, { useState } from "react";
import "../styles/index.css";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import LeftNavBar from "./LeftNavBar";
/* eslint-disable react/jsx-no-comment-textnodes */

function HeaderBar() {
  const headerMenu = [
    { id: 1, label: "home" },
    { id: 2, label: "expertise" },
    { id: 3, label: "projects" },
    { id: 4, label: "experience" },
    { id: 5, label: "contact" },
  ];
  const initialMenuItemsState = {};
  headerMenu.forEach((menuItem) => {
    initialMenuItemsState[menuItem.id] = false;
  });
  const [itemSelected, setItemSelected] = useState(initialMenuItemsState);
  const highlightHandler = (itemId) => {
    setItemSelected((prev) => {
      return {
        ...prev,
        [itemId]: !prev[itemId],
      };
    });
  };
  const anySelected = () => {
    const checker = (element) => element === true;
    return Object.values(itemSelected).some(checker);
  };
  const [openSideBar, setOpenSideBar] = useState(false);
  const sideBarHandler = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <div className="font-mono">
      {openSideBar && <LeftNavBar sideBarHandler={sideBarHandler} />}
      <div className="flex flex-row">
        <img
          className="absolute left-[6vw] top-[38px] w-[4.3vw] block sm:hidden"
          src={hamburgerIcon}
          onClick={sideBarHandler}
          alt="hamburger-icon"
        />
        <span className="flex flex-row font-bold absolute left-[60px] top-[30px] text-[5vw] xs:left-[75px] xs:top-[27px] sm:text-[2.5vw] sm:left-[15px] sm:top-[38px] md:text-[2.5vw] lg:text-[1.7vw] xl:left-[38px] xl:top-[38px] cursor-pointer ">
          <p className="text-blue-300">Bryan_Lim</p>
          <p className="text-white">.</p>
          <p className="text-green-500">_</p>
        </span>
      </div>
      <div className="hidden sm:block">
        <div className="flex flex-row justify-center mx-4 mt-7">
          <div className="flex flex-row justify-between max-w-full bg-transparent text-gray-50">
            {headerMenu.map((menuItem, index) => (
              <div
                key={menuItem.id}
                className={`flex flex-col relative text-menu-item ease-in-out duration-300 ${
                  !itemSelected[menuItem.id] && anySelected() && "text-gray-500"
                }`}
                onMouseOver={() => {
                  highlightHandler(menuItem.id);
                }}
                onMouseOut={() => {
                  highlightHandler(menuItem.id);
                }}
              >
                <span
                  className={`absolute top-2 right-5 text-gray-400 font-bold sm:text-[1.7vw] md:text-[1.3vw] lg:text-[0.9vw] xl:text-[0.7vw] ${
                    !itemSelected[menuItem.id] &&
                    anySelected() &&
                    "text-gray-500"
                  }`}
                >
                  {`0${menuItem.id}`}
                </span>
                <span className="my-5 mx-5 font-bold cursor-pointer text-nowrap sm:text-[1.6vw] md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1vw]">
                  {menuItem.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
