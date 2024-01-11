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
    "An aspiring software engineer currently pursuing a Master in Computing with a keen interest in web technologies, A.I., and automation!";

  const scrambleStyles = {
    mainNameDesc: "font-mono font-bold tracking-widest text-main-name-desc",
    mainAboutMe:
      "font-mono font-bold text-main-name-sub-desc text-wrap w-main-name-sub-desc self-center mt-[4vh]",
  };

  return (
    <div className="flex flex-col justify-center items-center text-center mt-about-me-top mb-about-me-bottom relative">
      <div className="flex flex-col justify-center items-center font-bold text-[14.7vw] sm:text-[11.5vw] md:text-[11.5vw] lg:text-[9.5vw] whitespace-nowrap leading-tight p-5">
        <h1 className="m-0 p-0">BRYAN LIM</h1>
        <div className="font-mono font-bold text-[16%] sm:text-[15%] text-gray-300 tracking-widest">
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
        <span className="font-mono font-bold text-gray-400 text-[2.4vw] sm:text-[1.4vw] md:text-[1.6vw] lg:text-[1.2vw] text-wrap self-center mt-[2vw] w-[70vw] sm:w-[50vw] md:w-[50vw] lg:w-[40vw]">
          {mainAboutMeText}
          {renderCursor.mainAboutMe && (
            <span className="m-0 p-0 animate-blink-cursor">_</span>
          )}
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
