import React, { useEffect, useState } from "react";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import gmail from "../icons/gmail.png";
import linkedinBlack from "../icons/linkedinBlack.png";
import githubBlack from "../icons/githubBlack.png";
import gmailBlack from "../icons/gmailBlack.png";
import WA from "../icons/WA.png";
import WABlack from "../icons/WABlack.png";
import { ThemeContext } from "../context/ThemeContext";
import "../App.css";

const HeroSections = () => {
  const { dark } = React.useContext(ThemeContext);
  const [showSpecialization, setShowSpecialization] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowSpecialization(true);
    }, 2000);
    setTimeout(() => {
      setShowDescription(true);
    }, 3000);

    setTimeout(() => {
      setShowIcons(true);
    }, 4000);
  }, []);

  return (
    <div className={`flex justify-center items-center ${dark && "dark"}`}>
      <div className="w-full h-screen flex justify-center items-center bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <div className="flex-row justify-center items-center w-full">
          <div className="typewriter transition-opacity duration-500">
            <h1 className="text-xl md:text-4xl text-white font-poppins max-w-fit pb-1">
              Hi, I'm{" "}
              <span className="text-slate-900 dark:text-teal-300">
                Pusaka Manggala
              </span>
            </h1>
          </div>

          {showSpecialization && (
            <h2 className="text-xl md:text-4xl text-white font-poppins transition-opacity duration-500 mb-4">
              A Front End Web Developer
            </h2>
          )}
          {showDescription && (
            <h1 className="md:text-xl text-xs font-poppins text-white mx-auto lg:w-2/4 ">
              I'm a front-end web developer from Indonesia, love to build a
              beautiful and fun website using React.Js and CSS framework like
              Bootstrap and Tailwind.
            </h1>
          )}
          {showIcons && (
            <div className="flex justify-center md:h-40 h-28 items-end transition-opacity duration-500">
              <a
                href="https://www.linkedin.com/in/pusakamanggala/"
                target="_blank"
                rel="noreferrer"
                className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500"
              >
                <img
                  className="md:h-10 h-8"
                  src={dark ? linkedinBlack : linkedin}
                  alt=""
                />
              </a>
              <a
                href="https://github.com/pusakamanggala"
                target="_blank"
                rel="noreferrer"
                className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500"
              >
                <img
                  className="md:h-10 h-8"
                  src={dark ? githubBlack : github}
                  alt=""
                />
              </a>
              <a
                href="mailto:pusakamanggala@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500"
              >
                <img
                  className="md:h-10 h-8"
                  src={dark ? gmailBlack : gmail}
                  alt=""
                />
              </a>
              <a
                href="https://wa.me/+6282126172854"
                target="_blank"
                rel="noreferrer"
                className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500"
              >
                <img className="md:h-11 h-8" src={dark ? WABlack : WA} alt="" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
