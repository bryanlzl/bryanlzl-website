import React from "react";

function ContactModal(props) {
  const contactModalHandler = props.contactModalHandler;

  return (
    <div
      onClick={contactModalHandler}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-100 bg-black opacity-70"
    >
      <div className="absolute top-0 left-0 w-full h-full"></div>
      <div className="relative bg-gray-800 text-white w-auto p-4 rounded-lg">
        <button
          className="absolute top-2 right-2 w-4 h-4 text-white cursor-pointer"
          onClick={contactModalHandler}
          alt="close-nav-bar-icon"
        >
          X
        </button>
        <nav className="p-4 space-y-4">
          <a
            href="#"
            className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
          >
            Expertise
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
          >
            Experience
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 hover:text-yellow-300 px-4 py-2 rounded-lg block transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
}

export default ContactModal;
