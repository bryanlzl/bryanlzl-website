import "../styles/index.css";
import triangleDownIcon from "../assets/icons/triangle-down-no-fill.svg";

function AboutMe() {
  return (
    <div className="flex flex-col relative justify-center text-center mt-about-me-top mb-about-me-bottom">
      <div className="flex flex-col justify-center text-main-name font-bold whitespace-nowrap leading-tight p-5">
        <h1 className="m-0 p-0">BRYAN LIM</h1>
        <div className="font-mono text-main-name-desc font-bold tracking-wide">
          SOFTWARE ENGINEER, FRONT-END & WEB DEVELOPER.
        </div>
      </div>
      <img
        src={triangleDownIcon}
        alt="downChevronIcon"
        className="absolute h-[1.3em] w-auto left-1/2 -bottom-[13em] animate-arrow-down-bounce"
      />
    </div>
  );
}

export default AboutMe;
