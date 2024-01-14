import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/index.css";
import triangleDownIcon from "../assets/icons/triangle-down-no-fill.svg";
import ScrambleText from "./ScrambleText";
// import CodeEditor from "../components/CodeEditorBackground";
// import BouncingSquare from "./BouncingSquare";

const AboutMe = React.forwardRef(function MyInput(props, ref) {
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

  const refList = props.refList;

  const handleClick = (code) => {
    if (refList[code] && refList[code].current) {
      refList[code].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [contactRef = ref, inView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });

  const [scramble, setScramble] = useState(false);

  useEffect(() => {
    "asdasd";
    inView ? setScramble(true) : setScramble(false);
  }, [inView]);

  return (
    <div
      id="aboutMe"
      className="relative bg-[url('../assets/background/about-me-bg.png')] bg-center bg-no-repeat bg-cover h-screen flex justify-center items-center"
      ref={ref}
    >
      {/* <CodeEditor /> */}
      {/* <BouncingSquare boundingBoxId="aboutMe" /> */}

      <div className="absolute left-[69dvw] top-[42.5dvh] xs:left-[65dvw] xs:top-[43dvh] sm:left-[61dvw] sm:top-[42dvh] md:left-[58dvw] md:top-[41dvh] lg:left-[57dvw] lg:top-[39dvh] xl:left-[57.5dvw] xl:top-[36dvh]">
        <div className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-blue-500 rounded-full relative filter blur-lg">
          <div className="absolute -inset-4 bg-[#49b3ea] rounded-full animate-pulse"></div>
        </div>
      </div>

      <div
        className="flex flex-col justify-center items-center text-center pt-about-me-top pb-about-me-bottom relative"
        ref={contactRef}
      >
        <div className="flex flex-col justify-center items-center font-bold text-[14.7vw] sm:text-[11.5vw] md:text-[11.5vw] lg:text-[9.5vw] whitespace-nowrap leading-tight p-5">
          <h1 className="m-0 p-0">BRYAN LIM</h1>
          <div className="font-mono font-bold text-[16%] sm:text-[15%] text-gray-300 tracking-widest">
            {scramble ? (
              <ScrambleText
                textType="mainNameDesc"
                charCase="upper"
                setRenderCursor={setRenderCursor}
                textToScramble={"SOFTWARE ENGINEER / WEB DEVELOPER / TINKERER"}
              />
            ) : (
              "SOFTWARE ENGINEER / WEB DEVELOPER / TINKERER"
            )}
            {renderCursor.mainNameDesc && (
              <span className="m-0 p-0 animate-blink-cursor">_</span>
            )}
          </div>
          <span className="font-mono bg-[#1e1f21] rounded-md py-2 opacity-65 text-gray-200 text-[2.4vw] sm:text-[1.4vw] md:text-[1.6vw] lg:text-[1.2vw] text-wrap self-center mt-[2vw] w-[70vw] sm:w-[50vw] md:w-[50vw] lg:w-[40vw]">
            {mainAboutMeText}
            <span className="m-0 p-0 animate-blink-cursor">_</span>
          </span>
        </div>
        <img
          src={triangleDownIcon}
          alt="downChevronIcon"
          className="absolute cursor-pointer h-[1.3em] w-auto self-center bottom-[7em] animate-arrow-down-bounce"
          onClick={() => handleClick("expertise")}
        />
      </div>
    </div>
  );
});

export default AboutMe;
