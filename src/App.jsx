import React, { useState, useRef, useEffect } from "react";
import HeaderBar from "./components/HeaderBar";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import WorkExp from "./components/WorkExp";
import Contact from "./components/Contact";
import CustomCursor from "./components/Cursor";
import LeftNavBar from "./components/LeftNavBar";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const sideBarHandler = () => {
    setOpenSideBar(!openSideBar);
  };
  const refList = {
    aboutme: useRef(null),
    expertise: useRef(null),
    projects: useRef(null),
    workexp: useRef(null),
    contact: useRef(null),
  };

  const headerMenu = [
    { id: 1, label: "Home", code: "aboutme" },
    { id: 2, label: "Expertise", code: "expertise" },
    { id: 3, label: "Projects", code: "projects" },
    { id: 4, label: "Experience", code: "workexp" },
    { id: 5, label: "Contact", code: "contact" },
  ];

  const handleClick = (code) => {
    if (refList[code] && refList[code].current) {
      refList[code].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <HeaderBar
        sideBarHandler={sideBarHandler}
        headerMenu={headerMenu}
        openSideBar={openSideBar}
        refList={refList}
        handleClick={handleClick}
      />
      <AboutMe ref={refList.aboutme} refList={refList} />
      <Expertise ref={refList.expertise} />
      <Projects ref={refList.projects} />
      <WorkExp ref={refList.workexp} />
      <Contact ref={refList.contact} />
      <CustomCursor />
      {openSideBar && (
        <LeftNavBar
          sideBarHandler={sideBarHandler}
          headerMenu={headerMenu}
          handleClick={handleClick}
        />
      )}
    </div>
  );
}

export default App;
