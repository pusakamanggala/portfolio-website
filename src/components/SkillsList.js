import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import html from "../icons/html.png";
import htmlBlack from "../icons/htmlBlack.png";
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
import reactQuery from "../icons/reactQuery.png";

const SkillsList = () => {
  const { dark } = useContext(ThemeContext);

  const skills = [
    {
      icon: html,
      alt: "HTML",
      altDark: htmlBlack,
      delay: 0,
      link: "https://www.w3schools.com/html/",
    },
    {
      icon: js,
      alt: "JavaScript",
      altDark: jsBlack,
      delay: 0.5,
      link: "https://www.javascript.com/",
    },
    {
      icon: react,
      alt: "ReactJS",
      altDark: reactBlack,
      delay: 1,
      link: "https://legacy.reactjs.org/docs/getting-started.html",
    },
    {
      icon: reactQuery,
      alt: "React Query",
      altDark: reactQuery,
      delay: 1.5,
      link: "https://legacy.reactjs.org/docs/getting-started.html",
    },
    {
      icon: bs,
      alt: "Bootstrap",
      altDark: bsBlack,
      delay: 2,
      link: "https://getbootstrap.com/",
    },
    {
      icon: tailwind,
      alt: "TailwindCSS",
      altDark: tailwindBlack,
      delay: 2.5,
      link: "https://tailwindcss.com/",
    },
    {
      icon: github,
      alt: "Github",
      altDark: githubBlack,
      delay: 3,
      link: "https://github.com/",
    },
    {
      icon: figma,
      alt: "Figma",
      altDark: figmaBlack,
      delay: 3.5,
      link: "https://www.figma.com/",
    },
  ];

  const getAnimationIconConfig = () => ({
    initial: { scale: 0 },
    whileInView: { rotate: 360, scale: 1 },
    transition: { type: "spring", stiffness: 260, damping: 20 },
    viewport: { once: true },
  });

  const iconAnimationConfig = getAnimationIconConfig();

  return (
    <div className={`${dark && "dark"}`}>
      <div className="pt-64 bg-teal-500 dark:bg-slate-900 transition-all duration-700 ">
        <h1 className="text-2xl text-center md:text-4xl text-slate-900  mb-0 dark:text-white">
          Skills and Tools
        </h1>
        <div className="flex flex-row py-20 justify-center flex-wrap">
          {skills.map((skill, index) => (
            <motion.a
              href={skill.link}
              target="_blank"
              key={index}
              initial={iconAnimationConfig.initial}
              whileInView={iconAnimationConfig.whileInView}
              transition={{
                ...iconAnimationConfig.transition,
                delay: skill.delay,
              }}
              title={skill.alt}
              viewport={iconAnimationConfig.viewport}
              className="flex h-14 w-14 md:h-20 md:w-20 m-5 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md relative"
            >
              <img
                className="md:h-10 h-8"
                src={dark ? skill.altDark : skill.icon}
                alt={skill.alt}
              />
            </motion.a>
          ))}
        </div>
        <img className="lg:h-72 h-40 mx-auto lg:mt-56" src={footerImg} alt="" />
        {/* footer */}
        <div className="w-full h-3 bg-white"></div>
      </div>
    </div>
  );
};

export default SkillsList;
