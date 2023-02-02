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
      <div className=" flex-row justify-center items-center w-full md:pt-60 pb-28 pt-44 bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <h1 className="text-4xl text-white font-poppins mb-0 p-4">
          Hi, I'm{" "}
          <span className="text-slate-900 dark:text-teal-300">
            Pusaka Manggala
          </span>
          <br /> A Front End Web Developer
        </h1>
        <h1 className="text-base font-poppins text-white mx-auto lg:w-2/4">
          I'm a front-end web developer from Indonesia, specializing in building
          beautiful website user interfaces using React.Js and css framework
          like Bootstrap and Tailwind.
        </h1>
        <div className="flex justify-center h-60 items-center ">
          <a
            href="https://www.linkedin.com/in/pusakamanggala/"
            className="flex m-3 h-20 w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md "
          >
            <img
              className="h-10 "
              src={dark ? linkedinBlack : linkedin}
              alt=""
            />
          </a>
          <a
            href="https://github.com/pusakamanggala"
            className="flex m-3 h-20 w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md"
          >
            <img className="h-10" src={dark ? githubBlack : github} alt="" />
          </a>
          <a
            href="mailto:pusakamanggala@gmail.com"
            className="flex m-3 h-20 w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md"
          >
            <img className="h-10" src={dark ? gmailBlack : gmail} alt="" />
          </a>
          <a
            href="https://wa.me/+6282126172854"
            className="flex m-3 h-20 w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md"
          >
            <img className="h-11" src={dark ? WABlack : WA} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroSections;
