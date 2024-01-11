import React, { useState } from "react";
import HeaderBar from "./components/HeaderBar";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import WorkExp from "./components/WorkExp";
import CustomCursor from "./components/Cursor";

function App() {
  return (
    <div>
      <HeaderBar />
      <AboutMe />
      <Expertise />
      <Projects />
      <WorkExp />
      <CustomCursor />
    </div>
  );
}

export default App;
