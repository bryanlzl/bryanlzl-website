import React, { useState } from "react";
import "../styles/index.css";
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

  return (
    <div className="font-mono">
      <span className="flex flex-row font-bold absolute top-9 left-9 text-top-left-name cursor-pointer">
        <p className="text-blue-300">BryanLim</p>
        <p className="text-white">.</p>
        <p className="text-green-500">_</p>
      </span>
      <div className="flex flex-row justify-center mx-4 mt-7">
        <div className="flex flex-row justify-between max-w-full bg-transparent text-gray-50">
          {headerMenu.map((menuItem, index) => (
            <div
              key={menuItem.id}
              className={`flex flex-col relative text-menu-item ease-in-out duration-300 ${
                !itemSelected[menuItem.id] && anySelected() && "text-gray-600"
              }`}
              onMouseOver={() => {
                highlightHandler(menuItem.id);
              }}
              onMouseOut={() => {
                highlightHandler(menuItem.id);
              }}
            >
              <span className="absolute top-2 right-5 text-gray-400 font-bold text-menu-item-id">
                {`0${index + 1}`}
              </span>
              <span className="my-5 mx-5 text-menu-item font-bold cursor-pointer">
                // {menuItem.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderBar;
