import "../styles/index.css";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center text-center mt-about-me-top mb-about-me-bottom">
      <div className="text-main-name font-bold whitespace-nowrap leading-tight p-5">
        BRYAN LIM
        <div className="font-mono text-main-name-desc font-bold tracking-wide">
          SOFTWARE ENGINEER, FRONT-END & WEB DEVELOPER.
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
