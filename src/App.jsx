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

  return (
    <div>
      <HeaderBar
        sideBarHandler={sideBarHandler}
        openSideBar={openSideBar}
        refList={refList}
      />
      <AboutMe ref={refList.aboutme} refList={refList} />
      <Expertise ref={refList.expertise} />
      <Projects ref={refList.projects} />
      <WorkExp ref={refList.workexp} />
      <Contact ref={refList.contact} />
      <CustomCursor />
      {openSideBar && <LeftNavBar sideBarHandler={sideBarHandler} />}
    </div>
  );
}

export default App;
