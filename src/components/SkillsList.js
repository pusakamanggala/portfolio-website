import React from "react";
import html from "../icons/html.png";
import htmlBlack from "../icons/htmlBlack.png";
import { ThemeContext } from "../context/ThemeContext";
import github from "../icons/github.png";
import githubBlack from "../icons/githubBlack.png";
import js from "../icons/js.png";
import react from "../icons/react.png";
import figma from "../icons/figma.png";
import tailwind from "../icons/tailwind.png";
import bs from "../icons/bs.png";
import jsBlack from "../icons/jsBlack.png";
import reactBlack from "../icons/reactBlack.png";
import figmaBlack from "../icons/figmaBlack.png";
import tailwindBlack from "../icons/tailwindBlack.png";
import bsBlack from "../icons/bsBlack.png";
import footerImg from "../img/footerImg.png";

const SkillsList = () => {
  const { dark } = React.useContext(ThemeContext);
  const skillsIcons = (icon) => {
    return (
      <div className="flex mx-auto h-20 w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md relative">
        <img className="h-10" src={icon} alt="" />
      </div>
    );
  };
  return (
    <div className={`${dark && "dark"}`}>
      <div className="pt-40 bg-teal-500 dark:bg-slate-900 transition-all duration-700 ">
        <h1 className="text-2xl md:text-4xl text-slate-900 font-poppins mb-0 dark:text-white">
          Skills and Tools
        </h1>
        <div className="grid grid-cols-3 lg:grid-cols-7 gap-8 md:w=full lg:w-5/12 mx-auto py-36">
          {skillsIcons(dark ? htmlBlack : html)}
          {skillsIcons(dark ? jsBlack : js)}
          {skillsIcons(dark ? reactBlack : react)}
          {skillsIcons(dark ? bsBlack : bs)}
          {skillsIcons(dark ? tailwindBlack : tailwind)}
          {skillsIcons(dark ? githubBlack : github)}
          {skillsIcons(dark ? figmaBlack : figma)}
        </div>
        <img className="lg:h-72 h-40 mx-auto lg:mt-56" src={footerImg} alt="" />
        <div className="w-full h-3 bg-white"></div>
      </div>
    </div>
  );
};

export default SkillsList;
