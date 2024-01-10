import "../styles/index.css";
import pcScreenIcon from "../assets/icons/pc-screen-icon.svg";
import reactLogoIcon from "../assets/icons/react-logo-icon.svg";
import gearIcon from "../assets/icons/gear-icon.svg";

function Expertise() {
  const expertiseContent = [
    {
      id: 0,
      labelColour: "bg-exp-label-0",
      label: "Software",
      subLabel: "Development",
      content:
        "Experienced in functional programming and OOP concepts: JavaScript, Python, C++.",
      icon: pcScreenIcon,
    },
    {
      id: 1,
      labelColour: "bg-exp-label-1",
      label: "Front-end Dev",
      subLabel: "React and Svelte",
      content:
        "UI/UX oriented with HTML, CSS, JS, React and Svelte experience and styling frameworks like Tailwind CSS and MUI.",
      icon: reactLogoIcon,
    },
    {
      id: 2,
      labelColour: "bg-exp-label-2",
      label: "Other",
      subLabel: "Technologies",
      content:
        "Experience in wire-framing, data visualization and RPA tools such as Figma, PowerBI and UIPath.",
      icon: gearIcon,
    },
  ];

  return (
    <div className="flex flex-col justify-center text-center pt-exp-top pb-exp-bottom">
      <div className="font-bold text-expertise-title pb-9">
        <h2 className="m-0 p-0">My Expertise</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {expertiseContent.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-row h-auto w-exp-box-w border-solid border-gray-400 border-exp-box m-1`}
          >
            <div className="flex flex-col px-exp-x py-exp-y">
              <div className="flex flex-row">
                <div className="pt-1">
                  <img
                    className="min-w-10 min-h-10"
                    src={item.icon}
                    alt="pc-screen-icon"
                  />
                </div>
                <div className="flex flex-col text-start pl-5 pb-4 font-bold text-2xl content-start">
                  <h1
                    className={`inline-block whitespace-nowrap leading-none ${item.labelColour} w-min`}
                  >
                    {item.label}
                  </h1>
                  <p className="whitespace-nowrap">{item.subLabel}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-left text-gray-500 mb-1">{`<h3>`}</div>
                <div className="font-mono text-start border-solid border-gray-500 border-l-2 ml-4 pl-4">
                  {item.content}
                </div>
                <div className="font-bold text-left text-gray-500 mt-2">{`</h3>`}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expertise;
