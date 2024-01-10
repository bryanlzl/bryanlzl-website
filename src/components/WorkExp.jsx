import React, { useState, useEffect } from "react";
import DICLogo from "../assets/workexp/DIC-logo.png";
import GetGoLogo from "../assets/workexp/GetGo-logo.png";
import chevronUp from "../assets/icons/chevron-up.svg";
import chevronDown from "../assets/icons/chevron-down.svg";
import linkIcon from "../assets/icons/external-link.svg";
import locationPinIcon from "../assets/icons/location-pin.svg";
import "../styles/index.css";

function WorkExp() {
  const workExpContent = [
    {
      id: 1,
      company: "DIC Asia Pacific",
      role: "Data Analyst Intern",
      responsibility:
        "Spearheaded digitalization of procurement processses using Python, PowerBI and SAP, creating impactful insights and enhancing data security with Azure Active Directory. Developed procurement reports that contributed to cost-saving initiatives.",
      location: "Singapore",
      startDuration: "Jan 2023",
      endDuration: "Jul 2023",
      technologies: ["Python", "openpyxl", "PowerBI", "UIPath"],
      companyLogo: DICLogo,
    },
    {
      id: 2,
      company: "GetGo",
      role: "Software Engineer Intern",
      responsibility:
        "Developed customer acquisition features on GetGo's main website and front-end of the car management system with React, Svelte and TypeScript.",
      location: "Singapore",
      startDuration: "May 2022",
      endDuration: "Aug 2022",
      technologies: ["React", "TypeScript", "Svelte"],
      companyLogo: GetGoLogo,
    },
  ];
  return (
    <div className="flex flex-col text-center mb-40">
      <div className="font-bold text-exp-title mb-[2.8vh]">
        <h2 className="m-0 p-0 self-center">Experience</h2>
      </div>
      {workExpContent.map((item) => (
        <div key={item.idx} className="self-center">
          <div className="flex flex-row justify-between bg-[#831edf] w-[40vw] min-w-[550px] max-w-[800px] text-[0.8em] lg:text-[1em] text-left font-bold py-[12px] px-[20px]">
            <h3>{`${item.role + " @ " + item.company}`}</h3>
            <p>{`${item.startDuration + " - " + item.endDuration}`}</p>
            <img className="w-[1em]" src={chevronDown} alt="chevronDownIcon" />
          </div>
          <div className="flex flex-row bg-[#241d41] w-[40vw] min-w-[550px] max-w-[800px] text-left">
            <div className="p-5 w-[75em]">
              <div className="flex flex-row mb-[0.5em]">
                <img
                  className="w-[1em] mr-[1em]"
                  src={locationPinIcon}
                  alt="location-pin-icon"
                />
                <p>{item.location}</p>
              </div>
              <p className="text-gray-300">{item.responsibility}</p>
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
}

export default WorkExp;
