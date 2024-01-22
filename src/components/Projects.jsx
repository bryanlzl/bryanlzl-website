import React, { useState, useEffect } from "react";
import "../styles/index.css";
import taskMakerImg from "../assets/projects/task-maker-project.png";
import currencySwapImg from "../assets/projects/currency-swap-project.png";
import NSMenLifeImg from "../assets/projects/NSMen-life.jpg";
import InSTATgramImg from "../assets/projects/InSTATgram.jpg";
import chessImg from "../assets/projects/chess-cropped.png";
import EdusysImg from "../assets/projects/Edusys.png";
import bryanlzlWebsiteImg from "../assets/projects/bryanlzl-website.png";
import CConnectWebsiteImg from "../assets/projects/c-connect-website.png";

const Projects = React.forwardRef(function MyInput(props, ref) {
  const [renderInfo, setRenderInfo] = useState({ project: 0, rendered: false });

  const renderHandler = (projectId) => {
    setRenderInfo((prev) => {
      return { project: projectId, rendered: !prev.rendered };
    });
  };

  const renderTransition = (renderInfo, currId) => {
    return renderInfo.project === currId && renderInfo.rendered
      ? "opacity-100 translate-y-0 transition-opacity duration-500"
      : "opacity-20 translate-y-0 transition-opacity duration-500";
  };

  const expertiseContent = [
    {
      id: 1,
      label: "This Website",
      year: 2023,
      content:
        "A personal website created to display portfolio, skills & work experience.",
      technology: ["React", "TailwindCSS"],
      imageStyle: "",
      images: [bryanlzlWebsiteImg],
      link: "https://bryanlim.vercel.app",
    },
    {
      id: 2,
      label: "NSMen Life",
      year: 2022,
      content:
        "NSMen Life is a one-stop mobile application that allows reservists (NSmen) to settle administrative matters and set fitness goals.",
      technology: ["React Native", "Expo", "Figma"],
      imageStyle: "",
      images: [NSMenLifeImg],
      link: "https://github.com/bryanlzl/AlphaGeeks-NSmen-Life-App",
    },
    {
      id: 3,
      label: "C-Connect Consultants",
      year: 2023,
      content:
        "Freelanced website design and development project for C-Connect Consultants, a recruitment agency",
      technology: ["React", "TypeScript", "TailwindCSS"],
      imageStyle: "",
      images: [CConnectWebsiteImg],
      link: "https://c-connect.vercel.app",
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
      link: "https://github.com/bryanlzl/InSTATgram",
    },
    {
      id: 5,
      label: "Task Manager",
      year: 2023,
      content:
        "A user-friendly task manager (tasker) to create, edit and delete tasks with an intuitive user-interface.",
      technology: ["React", "Express", "PostgreSQL"],
      imageStyle: "",
      images: [taskMakerImg],
      link: "https://github.com/bryanlzl/react-tasker",
    },
    {
      id: 6,
      label: "Chess",
      year: 2020,
      content:
        "Chess game that offers a single and two-player experience, enhanced move pathing indicators, game status alerts, along with a feature to undo moves.",
      technology: ["Python", "PyGame"],
      imageStyle: "",
      images: [chessImg],
      link: "https://github.com/bryanlzl/chess-without-chess-libraries",
    },
    {
      id: 7,
      label: "EduSYS Learn",
      year: 2021,
      content:
        "Empowering students to a wide variety and array of educational resources powered by Telegram Bot",
      technology: ["Python", "Telegram Bot"],
      imageStyle: "",
      images: [EdusysImg],
      link: "https://github.com/bryanlzl/EduSYS-learning-platform",
    },
  ];

  const twoColOrder = [1, 2, 6, 3, 5, 4, 7];
  const oneColOrder = [1, 3, 5, 2, 4, 6, 7];

  const [displayedContent, setDisplayedContent] = useState(expertiseContent);

  function rearrangeByOrder(order) {
    return order.map((id) => expertiseContent.find((item) => item.id === id));
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 640 && width < 1024) {
        setDisplayedContent(rearrangeByOrder(twoColOrder));
      } else if (width < 640) {
        setDisplayedContent(rearrangeByOrder(oneColOrder));
      } else {
        setDisplayedContent(expertiseContent);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    console.log(displayedContent);

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  {
    /*{
    id: 3,
    label: "Currency Swapper",
    year: 2023,
    content:
      "A dynamic cryptocurrency token swapping interface that allows users to exchange tokens of their choosing to another token.",
    technology: ["React", "Material UI"],
    imageStyle: "",
    images: [currencySwapImg],
    link: "https://github.com/bryanlzl/currency-swap-form",
  },*/
  }

  return (
    <div
      className="flex flex-col justify-center items-center text-center pt-exp-top pb-exp-bottom"
      ref={ref}
    >
      <div className="font-bold text-expertise-title">
        <h2 className="m-0 p-0">Projects</h2>
      </div>
      <p className="animate-project-pulse flex space-x-4 font-mono font-bold text-[20px] pb-8 pt-2">
        Hover to learn more!
      </p>
      <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 3xl:columns-4 mx-[5%] gap-0">
        {displayedContent.map((item) => (
          <div
            key={item.id}
            onMouseOver={() => {
              renderHandler(item.id);
            }}
            onMouseOut={() => {
              renderHandler(item.id);
            }}
            className="flex flex-col cursor-pointer h-fit mx-2 mb-4 bg-gray-700 break-inside-avoid-column px-1"
          >
            <h2 className="block text-[1.2em] text-start font-bold p-1">
              {item.label}
            </h2>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row relative items-start w-auto max-w-lg items-center"
            >
              <span
                className={
                  "absolute inset-0 max-w-xl p-auto bg-gray-900 opacity-75 "
                }
              />
              <span
                className={
                  "absolute flex flex-col max-w-xl p-auto font-mono text-[2.vh] opacity-100 "
                }
              >
                <p className="sm:text-[2vmin] overflow-auto">{item.content}</p>
              </span>
              {item.images.map((projectImage, idx) => (
                <img
                  className={
                    item.imageStyle + renderTransition(renderInfo, item.id)
                  }
                  key={idx}
                  src={projectImage}
                  alt={`${item.label}Img${idx}`}
                />
              ))}
            </a>
            <span className="flex flex-row justify-center">
              {item.technology.map((tech, techId) => (
                <div
                  key={techId}
                  className="my-1 mx-2 p-1 border border-[2px] border-purple-500 radius-4 rounded"
                >
                  {tech}
                </div>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
