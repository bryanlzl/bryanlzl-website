import React, { useState } from "react";
import "../styles/index.css";
import triangleDownIcon from "../assets/icons/triangle-down-no-fill.svg";
import ScrambleText from "./ScrambleText";

function AboutMe() {
  const [renderCursor, setRenderCursor] = useState({
    mainNameDesc: false,
    mainAboutMe: false,
  });
  const mainAboutMeText =
    "An aspiring software engineer currently pursuing a Master in Computing with keen interest in web technologies, A.I. and automation!";
  const scrambleStyles = {
    mainNameDesc: "font-mono text-main-name-desc font-bold tracking-widest",
    mainAboutMe:
      "font-mono text-main-name-sub-desc font-bold w-main-name-sub-desc text-wrap self-center mt-[4vh]",
  };

  return (
    <div className="flex flex-col relative justify-center text-center mt-about-me-top mb-about-me-bottom">
      <div className="flex flex-col justify-center text-[14.7vw] sm:text-[11.5vw] md:text-[11.5vw] lg:text-[9.5vw] font-bold whitespace-nowrap leading-tight p-5">
        <h1 className="m-0 p-0 ">BRYAN LIM</h1>
        <div className="font-mono text-[16%] sm:text-[15%] text-gray-300 font-bold tracking-widest">
          <ScrambleText
            textType="mainNameDesc"
            styling={scrambleStyles.mainNameDesc}
            setRenderCursor={setRenderCursor}
            textToScramble={"SOFTWARE ENGINEER / WEB DEVELOPER / TINKERER"}
          />
          {renderCursor.mainNameDesc && (
            <span className="m-0 p-0 animate-blink-cursor">_</span>
          )}
        </div>
        <span className="font-mono text-gray-400 font-bold text-[2.4vw] w-[70vw] sm:text-[1.4vw] md:text-[1.6vw] lg:text-[1.2vw] sm:w-[50vw] md:w-[50vw] lg:w-[40vw] text-wrap self-center mt-[2vw]">
          {mainAboutMeText}
          <span className="m-0 p-0 animate-blink-cursor">_</span>
        </span>
      </div>
      <img
        src={triangleDownIcon}
        alt="downChevronIcon"
        className="absolute h-[1.3em] w-auto self-center -bottom-[13em] animate-arrow-down-bounce"
      />
    </div>
  );
}

export default AboutMe;
