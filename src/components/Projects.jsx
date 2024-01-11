import React, { useState } from "react";
import "../styles/index.css";
import taskMakerImg from "../assets/projects/task-maker-project.png";
import currencySwapImg from "../assets/projects/currency-swap-project.png";
import NSMenLife1Img from "../assets/projects/NSMen-life-1.png";
import NSMenLife2Img from "../assets/projects/NSMen-life-2.png";
import NSMenLife3Img from "../assets/projects/NSMen-life-3.png";
import InSTATgramImg from "../assets/projects/InSTATgram.jpg";
import chessImg from "../assets/projects/chess.png";

function Projects() {
  const [renderInfo, setRenderInfo] = useState({ project: 0, rendered: false });
  const renderHandler = (projectId) => {
    setRenderInfo((prev) => {
      return { project: projectId, rendered: !prev.rendered };
    });
  };
  const renderTransition = (renderInfo, currId) => {
    return renderInfo.project === currId && renderInfo.rendered
      ? "opacity-100 translate-y-0 transition-opacity duration-500"
      : "opacity-0 translate-y-0 transition-opacity duration-500";
  };

  const expertiseContent = [
    {
      id: 1,
      label: "To-do List Maker",
      year: 2023,
      content:
        "A user friendly to-do list maker (tasker) for users to create, edit and delete tasks.",
      technology: ["React", "Express", "PostgreSQL"],
      imageStyle: "",
      images: [taskMakerImg],
    },

    {
      id: 2,
      label: "Currency Swapper",
      year: 2023,
      content:
        "A dynamic cryptocurrency token swapping interface that allows users to exchange tokens of their choosing to another token.",
      technology: ["React", "Material UI"],
      imageStyle: "",
      images: [currencySwapImg],
    },

    {
      id: 3,
      label: "NSMen Life",
      year: 2022,
      content:
        "NSMen Life is a one-stop mobile application that allows reservists (NSmen) to settle administrative matters and set fitness goals.",
      technology: ["React Native", "Expo", "Figma"],
      imageStyle: "w-1/3",
      images: [NSMenLife1Img, NSMenLife2Img, NSMenLife3Img],
    },

    {
      id: 4,
      label: "InSTATgram",
      year: 2023,
      content:
        "InSTATgram is a social media analytics tool that automates the extraction and analysis of data from Instagram profiles, providing comprehensive insights and a user-friendly interface.",
      technology: ["UIPath", "PowerBI"],
      imageStyle: "",
      images: [InSTATgramImg],
    },

    {
      id: 5,
      label: "Chess",
      year: 2020,
      content:
        "Chess game that offers a single and two-player experience, enhanced move pathing indicators, game status alerts, along with a feature to undo moves.",
      technology: ["Python", "PyGame"],
      imageStyle: "",
      images: [chessImg],
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center text-center pt-exp-top pb-exp-bottom">
      <div className="font-bold text-expertise-title">
        <h2 className="m-0 p-0">Projects</h2>
      </div>
      <p className="animate-project-pulse flex space-x-4 font-mono font-bold text-[20px] pb-8 pt-2">
        hover to learn more!
      </p>
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 3xl:columns-4 mx-[5%] gap-0">
        {expertiseContent.map((item) => {
          return (
            <div
              key={item.id}
              onMouseOver={() => {
                renderHandler(item.id);
              }}
              onMouseOut={() => {
                renderHandler(item.id);
              }}
              className="flex flex-col cursor-pointer h-fit mx-2 mb-4 bg-gray-700 break-inside-avoid-column px-1 "
            >
              <h2 className="block text-[1.2em] text-start font-bold p-1">
                {item.label}
              </h2>

              <span className="flex flex-row relative items-start w-auto max-w-lg items-center">
                {item.images.map((projectImage, idx) => (
                  <img
                    className={item.imageStyle}
                    key={idx}
                    src={projectImage}
                    alt={`${item.label}Img${idx}`}
                  />
                ))}
                <span
                  className={
                    "absolute inset-0 max-w-xl p-auto bg-gray-900 opacity-0 " +
                    renderTransition(renderInfo, item.id)
                  }
                />
                <span
                  className={
                    "absolute flex flex-col max-w-xl p-auto font-mono text-[2.vh] opacity-0 " +
                    renderTransition(renderInfo, item.id)
                  }
                >
                  <p className="sm:text-[2vmin] overflow-auto">
                    {item.content}
                  </p>
                </span>
              </span>
              <span className="flex flex-row justify-center">
                {item.technology.map((tech, techId) => (
                  <div
                    key={techId}
                    className="mt-2 mx-2 p-1 border border-[2px] border-purple-500 radius-4 rounded"
                  >
                    {tech}
                  </div>
                ))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
