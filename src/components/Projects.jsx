import "../styles/index.css";
import taskMakerImg from "../assets/projects/task-maker-project.png";
import currencySwapImg from "../assets/projects/currency-swap-project.png";
import NSMenLife1 from "../assets/projects/NSMen-life-1.png";
import NSMenLife2 from "../assets/projects/NSMen-life-2.png";
import NSMenLife3 from "../assets/projects/NSMen-life-3.png";

function Projects() {
  const expertiseContent = [
    {
      id: 1,
      label: "To-do List Maker",
      year: 2023,
      content:
        "A user friendly to-do list maker (tasker) for users to create, edit and delete tasks.",
      technology: ["React", "Express", "PostgreSQL"],
      images: [taskMakerImg],
    },
    {
      id: 2,
      label: "Currency Swapper",
      year: 2023,
      content:
        "A dynamic cryptocurrency token swapping interface that allows users to exchange tokens of their choosing to another token.",
      technology: ["React", "Material UI"],
      images: [currencySwapImg],
    },
    {
      id: 3,
      label: "NSMen Life",
      year: 2022,
      content:
        "NSMen Life is a one-stop mobile application that allows reservists (NSmen) to settle administrative matters and set fitness goals.",
      technology: ["React Native", "Expo", "AWS Amplify"],
      images: [NSMenLife1, NSMenLife2, NSMenLife3],
    },
  ];
  return (
    <div className="flex flex-col justify-center text-center pt-exp-top pb-exp-bottom">
      <div className="font-bold text-expertise-title pb-9">Projects</div>
      <div className="flex flex-wrap justify-center">
        {expertiseContent.map((item) => (
          <div key={item.id} className={`flex flex-row h-auto m-1`}>
            <span className="flex flex-row items-start">
              {item.images.map((projectImage, index) => (
                <img
                  key={index}
                  className="h-auto w-auto max-w-xl"
                  src={projectImage}
                  alt={`${item.label}Img${index}`}
                />
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
