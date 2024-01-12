import React, { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import WorkExp from "./components/WorkExp";
import CustomCursor from "./components/Cursor";
import ContactModal from "./components/ContactModal";
import LeftNavBar from "./components/LeftNavBar";

function App() {
  const [openContactModal, setOpenContactModal] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const contactModalHandler = () => {
    setOpenContactModal(!openContactModal);
  };
  const sideBarHandler = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <div>
      <HeaderBar
        contactModalHandler={contactModalHandler}
        sideBarHandler={sideBarHandler}
        openSideBar={openSideBar}
      />
      <AboutMe />
      <Expertise />
      <Projects />
      <WorkExp />
      <CustomCursor />
      {openSideBar && (
        <LeftNavBar
          sideBarHandler={sideBarHandler}
          contactModalHandler={contactModalHandler}
        />
      )}
      {openContactModal && (
        <ContactModal contactModalHandler={contactModalHandler} />
      )}
    </div>
  );
}

export default App;
