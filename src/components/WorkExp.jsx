import React, { useState } from "react";
import DICLogo from "../assets/workexp/DIC-logo.png";
import GetGoLogo from "../assets/workexp/GetGo-logo.png";
import chevronDown from "../assets/icons/chevron-down.svg";
import locationPinIcon from "../assets/icons/location-pin.svg";
import "../styles/index.css";

const WorkExp = React.forwardRef(function MyInput(props, ref) {
  const workExpContent = [
    {
      id: 1,
      company: "DIC Asia Pacific",
      role: "Data Analyst Intern",
      responsibility:
        "Spearheaded digitalization of procurement processes using Python, PowerBI, and SAP, creating impactful insights and enhancing data security with Azure Active Directory. Developed procurement reports that contributed to cost-saving initiatives.",
      location: "Singapore",
      startDuration: "Jan 2023",
      endDuration: "Jul 2023",
      technology: ["Python", "PowerBI", "UIPath"],
      companyLogo: DICLogo,
    },
    {
      id: 2,
      company: "GetGo Carsharing",
      role: "Software Engineer Intern",
      responsibility:
        "Developed customer acquisition features on GetGo's main website and front-end of the car management system with React, Svelte, and TypeScript.",
      location: "Singapore",
      startDuration: "May 2022",
      endDuration: "Aug 2022",
      technology: ["React", "TypeScript", "Bootstrap", "Svelte"],
      companyLogo: GetGoLogo,
    },
  ];

  const expand = {};
  workExpContent.forEach((wexp) => {
    expand[wexp.id] = true;
  });

  const [expandState, setExpandState] = useState(expand);

  const expandHandler = (wIdx) => {
    setExpandState((prev) => {
      return { ...prev, [wIdx]: !prev[wIdx] };
    });
  };

  return (
    <div className="flex flex-col text-center pt-[10vh] mb-[15dvh]" ref={ref}>
      <div className="font-bold text-exp-title mb-[2.8vh]">
        <h2 className="m-0 p-0 self-center">Experience</h2>
      </div>
      {workExpContent.map((item) => (
        <div
          key={item.id}
          className="self-center w-[90vw] sm:w-[80vw] md:w-[70vw] md:w-[65vw] max-w-[800px] text-[2.5vw]"
        >
          <div
            className="!relative flex flex-row justify-between bg-[#374151] mb-2 transition-all duration-300 hover:bg-[#5a6a85] tracking-wide sm:text-[2.2vw] md:text-[1.7vw] lg:text-[1.6vw] xl:text-[1.3vw] 2xl:text-[20px] text-left font-bold py-[12px] px-[15px] rounded-md"
            onClick={() => {
              expandHandler(item.id);
            }}
          >
            <h3>{`${item.company}`}</h3>
            <div className="flex flex-row">
              <p className="mr-[4vw]">{`${
                item.startDuration + " - " + item.endDuration
              }`}</p>
              <img
                className={`w-[1em] mx-[1vw] transition-all transform ${
                  expandState[item.id] && "rotate-[-180deg]"
                } duration-500`}
                src={chevronDown}
                alt="chevronDownIcon"
              />
            </div>
          </div>
          <div
            className={`flex flex-row rounded-md bg-[#19334d] text-left mb-2 sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.6vw] xl:text-[1.2vw] 2xl:text-[17px] ${
              expandState[item.id] ? "block" : "hidden"
            } transition-all delay-150 duration-300 overflow-hidden ease-in-out`}
          >
            <div className="flex flex-col justify-start p-3 w-[75em]">
              <div className="flex flex-row mb-[1em]">
                <p className="mr-[10vw]">{item.role}</p>
                <div className="flex flex-row">
                  <img
                    className="w-[1em] mr-[1em]"
                    src={locationPinIcon}
                    alt="location-pin-icon"
                  />
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="text-gray-300">{item.responsibility}</p>
              <span className="flex flex-row">
                {item.technology.map((tech, techId) => (
                  <div
                    key={techId}
                    className="mt-3 mr-4 p-1 border border-[2px] border-purple-500 radius-4 rounded"
                  >
                    {tech}
                  </div>
                ))}
              </span>
            </div>
            <span className="flex flex-row justify-center items-center w-[20em]">
              <img
                className="w-[80%] h-auto"
                src={item.companyLogo}
                alt={`${item.company} logo`}
              />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
});

export default WorkExp;
