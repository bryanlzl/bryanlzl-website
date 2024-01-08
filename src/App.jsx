import React from "react";
import HeaderBar from "./components/HeaderBar";
import AboutMe from "./components/AboutMe";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <HeaderBar />
      <AboutMe />
      <Expertise />
      <Projects />
    </div>
  );
}

export default App;
