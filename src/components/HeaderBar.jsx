import React, { useState, useEffect } from "react";
import "../styles/index.css";
import hamburgerIcon from "../assets/icons/hamburger.svg";
//import LeftNavBar from "./LeftNavBar";
//import ContactModal from "./ContactModal";

function HeaderBar(props) {
  const refList = props.refList;
  const headerMenu = props.headerMenu;
  const contactModalHandler = props.contactModalHandler;
  const sideBarHandler = props.sideBarHandler;
  const openSideBar = props.openSideBar;
  const initialMenuItemsState = {};

  headerMenu.forEach((menuItem) => {
    initialMenuItemsState[menuItem.id] = false;
  });

  const handleClick = props.handleClick;

  const [itemSelected, setItemSelected] = useState(initialMenuItemsState);
  const [isHeaderBackgroundBlack, setIsHeaderBackgroundBlack] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHeaderBackgroundBlack(true);
      } else {
        setIsHeaderBackgroundBlack(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`font-mono fixed top-0 left-0 w-full z-50 ${
        isHeaderBackgroundBlack ? "bg-black opacity-70" : ""
      }`}
    >
      <div
        className={`flex flex-row ${
          isHeaderBackgroundBlack || openSideBar ? "hidden" : ""
        }`}
      >
        <img
          className={`absolute left-[6vw] top-[38px] w-[4.3vw] block sm:hidden`}
          src={hamburgerIcon}
          onClick={sideBarHandler}
          alt="hamburger-icon"
        />
        <span
          className={`flex flex-row font-bold absolute left-[70px] top-[29px] text-[5vw] xs:left-[85px] xs:top-[27px] sm:text-[2.5vw] sm:left-[21px] sm:top-[40px] md:left-[24px] md:top-[42px] md:text-[2.3vw] lg:left-[24px] lg:top-[42px] lg:text-[1.7vw] xl:left-[3vw] xl:top-[38px] cursor-pointer`}
        >
          <p>{`0x`}</p>
          <p className="text-blue-300">Bryan</p>
        </span>
      </div>
      <div className="hidden sm:block">
        <div
          className={`flex flex-row justify-center mx-4 mt-7 ${
            isHeaderBackgroundBlack ? "mt-[5px]" : ""
          }`}
        >
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
                onClick={() => {
                  handleClick(menuItem.code);
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
                <span
                  className={`my-5 mx-5 font-bold cursor-pointer text-nowrap sm:text-[1.6vw] md:text-[1.5vw] lg:text-[1.3vw] xl:text-[1vw] ${
                    menuItem.label === "contact" && "animate-pulse"
                  }`}
                >
                  {menuItem.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
