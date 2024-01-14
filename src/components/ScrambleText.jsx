import React, { useState, useEffect } from "react";
import "../styles/index.css";

function ScrambleText(props) {
  const setRenderCursor = props.setRenderCursor;
  const textType = props.textType;
  const textToScramble = props.textToScramble;
  const charCase = props.charCase;

  const [scrambledText, setScrambledText] = useState("");
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    const originalText = textToScramble;
    let currentIndex = 0;
    let counter = 0;
    let animationInterval;

    const scrambleText = () => {
      if (currentIndex < originalText.length) {
        if (originalText[currentIndex] !== " ") {
          let scrambleLength = originalText.length - currentIndex;
          let randomString = "";
          const startingVal = charCase === "upper" ? 65 : 97;
          for (let i = 0; i < scrambleLength; i++) {
            randomString += String.fromCharCode(
              Math.floor(Math.random() * 26) + startingVal
            );
          }
          const newText =
            originalText.substring(0, currentIndex) + randomString;
          setScrambledText(newText);
          if (counter < 1) {
            counter++;
          } else {
            currentIndex++;
            counter = 0;
          }
          animationInterval = setTimeout(scrambleText, 20);
        } else {
          currentIndex++;
          animationInterval = setTimeout(scrambleText, 0);
        }
      } else {
        setScrambledText(props.textToScramble);
        setIsScrambling(false);
        setRenderCursor((prev) => {
          return { ...prev, [textType]: true };
        });
      }
    };

    scrambleText();

    return () => {
      clearTimeout(animationInterval);
    };
  }, [props.textToScramble]);

  return (
    <span
      className={`${
        isScrambling ? "transition duration-500 ease-in-out" : ""
      } ${isScrambling ? "text-opacity-75 blur-smooth" : ""}`}
    >
      {scrambledText}
    </span>
  );
}

export default ScrambleText;
