import React, { useState, useEffect } from "react";
import emailIcon from "../assets/logos/email-logo.svg";
import resumeIcon from "../assets/logos/resume-logo.svg";
import githubLogo from "../assets/logos/github-logo.svg";
import linkedinLogo from "../assets/logos/linkedin-logo.svg";

function ContactModal(props) {
  const contactItems = {
    1: { id: 1, title: "Resume", icon: resumeIcon },
    2: { id: 2, title: "LinkedIn", icon: linkedinLogo },
    3: { id: 3, title: "GitHub", icon: githubLogo },
    4: { id: 4, title: "Email", icon: emailIcon },
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactModalHandler = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.contactModalHandler();
    }, 500); // Adjust the delay to match your fade-out transition duration
  };

  const preventClose = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-100 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={contactModalHandler}
    >
      <div
        className="relative bg-[#2f2f2f] text-white w-auto p-4 rounded-lg bg-opacity-100 w-[250px] xs:w-[320px] lg:w-[500px] z-110"
        onClick={preventClose}
      >
        <nav className="flex flex-col p-4 space-y-4 items-center justify-center">
          {Object.values(contactItems).map((item) => {
            return (
              <a
                key={item.id}
                href="#"
                className="flex flex-row w-full justify-center bg-[#2a4968] font-bold items-center text-white py-2 rounded-lg text-[20px] md:text-[20px] lg:text-[27px] block transition-colors duration-500 hover:bg-gray-400 hover:text-gray-800 ease-in-out"
              >
                <img
                  className={`${
                    item.title === "Resume" ? "w-[20px]" : "w-[25px]"
                  } ml-3`}
                  src={item.icon}
                  alt="resume-logo"
                />
                <p className="mx-3">{item.title}</p>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default ContactModal;
