import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import emailIcon from "../assets/logos/email-logo.svg";
import resumeIcon from "../assets/logos/resume-logo.svg";
import githubLogo from "../assets/logos/github-logo.svg";
import linkedinLogo from "../assets/logos/linkedin-logo.svg";
import ScrambleText from "./ScrambleText";

const Contact = React.forwardRef(function MyInput(props, ref) {
  const contactItems = [
    {
      id: 1,
      title: "LinkedIn",
      icon: linkedinLogo,
      link: "https://www.linkedin.com/in/bryanlimzhenlun/",
    },
    {
      id: 2,
      title: "GitHub",
      icon: githubLogo,
      link: "https://github.com/bryanlzl",
    },
    {
      id: 3,
      title: "Email",
      icon: emailIcon,
      link: "mailto:zhenlun.bryan@gmail.com",
    },
  ];

  const textContent = {
    q1: "Have an exciting project to collaborate with?",
    q2: "Seek a dedicated engineer to elevate your team?",
  };

  const [renderCursor, setRenderCursor] = useState({
    q1: false,
    q2: false,
  });

  const [contactRef = ref, inView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });

  const [scramble, setScramble] = useState(false);

  useEffect(() => {
    inView ? setScramble(true) : setScramble(false);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative flex flex-col h-auto text-center pt-10 md:pt-20 lg:pt-24 pb-[30vw] xs:pb-[20vw] lg:pb-[10vw]"
    >
      <div className="flex flex-row justify-center" ref={contactRef}>
        <div className="flex flex-col items-center w-full md:w-3/4 lg:w-1/2">
          <div className="mb-6">
            <h2 className="font-bold text-[50px] xs:text-[70px] mb-2">
              Get In Touch
            </h2>
            <p className="font-mono font-bold text-[12px] xs:text-sm md:text-lg lg:text-xl text-gray-300">
              {scramble ? (
                <ScrambleText
                  textType="q1"
                  charCase="lower"
                  setRenderCursor={setRenderCursor}
                  textToScramble={textContent.q1}
                />
              ) : (
                textContent.q1
              )}
              {renderCursor.q1 && (
                <span className="m-0 p-0 animate-blink-cursor">_</span>
              )}
            </p>
            <p className="font-mono font-bold text-[12px] xs:text-sm md:text-lg lg:text-xl mb-6 text-gray-300">
              {scramble ? (
                <ScrambleText
                  triggerRender=""
                  textType="q2"
                  charCase="lower"
                  setRenderCursor={setRenderCursor}
                  textToScramble={textContent.q2}
                />
              ) : (
                textContent.q2
              )}

              {renderCursor.q2 && (
                <span className="m-0 p-0 animate-blink-cursor">_</span>
              )}
            </p>
            <div className="font-mono font-bold text-lg md:text-xl lg:text-2xl text-gray-200">
              <h1 className="inline-block relative">
                <p className="whitespace-nowrap leading-none relative z-10">
                  Let's link up!
                </p>
                <span className="absolute bg-[#108500] top-1/2 left-0 w-full h-1/2 z-0"></span>
              </h1>
            </div>
          </div>
          <div className="flex flex-row w-full gap-4 justify-center">
            {contactItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex flex-row justify-center items-center p-2 
                  text-white rounded-lg hover:bg-gray-400 hover:text-gray-800
                  transition duration-300 ease-in-out transform hover:scale-105
                `}
              >
                <img
                  className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${
                    item.title === "Resume" ? "mb-2" : "mb-1.5"
                  }`}
                  src={item.icon}
                  alt="resume-logo"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <span className="absolute bottom-5 w-full left-1/2 transform -translate-x-1/2">
        <span className="flex flex-row justify-center text-[8px] md:text-sm lg:text-md">
          Made with <p className="animate-pulse">⚡</p> by Bryan Lim
        </span>
      </span>
    </div>
  );
});

export default Contact;
