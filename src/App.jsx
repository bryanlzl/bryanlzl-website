import React, { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import WorkExp from "./components/WorkExp";
import CustomCursor from "./components/Cursor";
import ContactModal from "./components/ContactModal";

function App() {
  const [openContactModal, setOpenContactModal] = useState(false);
  const contactModalHandler = () => {
    setOpenContactModal(!openContactModal);
  };
  return (
    <div>
      <HeaderBar contactModalHandler={contactModalHandler} />
      <AboutMe />
      <Expertise />
      <Projects />
      <WorkExp />
      <CustomCursor />
      {openContactModal && (
        <ContactModal contactModalHandler={contactModalHandler} />
      )}
    </div>
  );
}

export default App;
