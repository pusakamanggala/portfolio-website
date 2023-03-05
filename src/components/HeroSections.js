import React from "react";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import gmail from "../icons/gmail.png";
import linkedinBlack from "../icons/linkedinBlack.png";
import githubBlack from "../icons/githubBlack.png";
import gmailBlack from "../icons/gmailBlack.png";
import WA from "../icons/WA.png";
import WABlack from "../icons/WABlack.png";
import { ThemeContext } from "../context/ThemeContext";

const HeroSections = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <div className={`flex justify-center items-center ${dark && "dark"} `}>
      <div className="w-full h-screen flex justify-center items-center bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <div className=" flex-row justify-center  items-center w-full">
          <h1 className="text-xl md:text-4xl text-white font-poppins p-4">
            Hi, I'm{" "}
            <span className="text-slate-900 dark:text-teal-300">
              Pusaka Manggala
            </span>
            <br /> A Front End Web Developer
          </h1>
          <h1 className="md:text-xl text-xs font-poppins text-white mx-auto lg:w-2/4">
            I'm a front-end web developer from Indonesia, love to build a
            beautiful and fun website using React.Js and CSS framework like
            Bootstrap and Tailwind.
          </h1>
          <div className="flex justify-center md:h-60 h-28 items-center ">
            <a
              href="https://www.linkedin.com/in/pusakamanggala/"
              target="_blank"
              rel="noreferrer"
              className="flex m-3 h-14 w-14 md:h-20 md:w-20  rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md "
            >
              <img
                className="md:h-10 h-8 "
                src={dark ? linkedinBlack : linkedin}
                alt=""
              />
            </a>
            <a
              href="https://github.com/pusakamanggala"
              target="_blank"
              rel="noreferrer"
              className="flex m-3 h-14 w-14 md:h-20 md:w-20  rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md"
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
              className="flex m-3 h-14 w-14 md:h-20 md:w-20  rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md"
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
              className="flex m-3 h-14 w-14 md:h-20 md:w-20  rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md"
            >
              <img className="md:h-11 h-8" src={dark ? WABlack : WA} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSections;
