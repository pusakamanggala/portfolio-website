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
import { motion } from "framer-motion";

const HeroSections = () => {
  const { dark } = React.useContext(ThemeContext);
  const [showSpecialization, setShowSpecialization] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  // check mobile screen
  const isMobile = window.innerWidth <= 768;
  const mobileTimeoutAddition = isMobile ? 1500 : 0;

  useEffect(() => {
    setTimeout(() => {
      setShowSpecialization(true);
    }, 1300 + mobileTimeoutAddition);
    setTimeout(() => {
      setShowDescription(true);
    }, 2000 + mobileTimeoutAddition);

    setTimeout(() => {
      setShowIcons(true);
    }, 2600 + mobileTimeoutAddition);
  }, [mobileTimeoutAddition]);

  const getAnimationConfig = () => {
    return {
      initial: { opacity: 0, y: 20 }, // Initial state (hidden and slightly moved down)
      animate: { opacity: 1, y: 0 }, // Animation to play (visible and in original position)
      transition: { duration: 0.5 }, // Animation duration
    };
  };

  const getAnimationIconConfig = () => {
    return {
      initial: { scale: 0 },
      animate: { rotate: 360, scale: 1 },
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    };
  };

  const iconAnimationConfig = getAnimationIconConfig();
  const animationConfig = getAnimationConfig();

  return (
    <div className={`flex justify-center items-center ${dark && "dark"}`}>
      <div className="w-full h-screen flex justify-center items-center bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <div className="flex-row justify-center items-center w-full p-5 md:p-0">
          <div className="typewriter transition-opacity duration-500">
            <h1 className="text-xl md:text-4xl text-white font-poppins max-w-fit pb-1">
              Hi, I'm{" "}
              <span className="text-slate-900 dark:text-teal-300">
                Pusaka Manggala
              </span>
            </h1>
          </div>

          {showSpecialization && (
            <motion.h2
              initial={animationConfig.initial}
              animate={animationConfig.animate}
              transition={animationConfig.transition}
              className="text-xl md:text-4xl text-white font-poppins transition-opacity duration-500 mb-4"
            >
              A Front End Web Developer
            </motion.h2>
          )}
          {showDescription && (
            <motion.h1
              initial={animationConfig.initial}
              animate={animationConfig.animate}
              transition={animationConfig.transition}
              className="md:text-xl text-xs font-poppins text-white mx-auto lg:w-2/4"
            >
              I'm a front-end web developer from Indonesia, love to build a
              beautiful and fun website using React.Js and CSS framework like
              Bootstrap and Tailwind.
            </motion.h1>
          )}
          {showIcons && (
            <div className="flex justify-center md:h-40 h-28 items-end transition-opacity duration-500">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              />
              <motion.a
                initial={iconAnimationConfig.initial}
                animate={iconAnimationConfig.animate}
                transition={{ ...iconAnimationConfig.transition, delay: 0 }}
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
              </motion.a>
              <motion.a
                initial={iconAnimationConfig.initial}
                animate={iconAnimationConfig.animate}
                transition={{ ...iconAnimationConfig.transition, delay: 0.5 }}
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
              </motion.a>
              <motion.a
                initial={iconAnimationConfig.initial}
                animate={iconAnimationConfig.animate}
                transition={{ ...iconAnimationConfig.transition, delay: 1 }}
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
              </motion.a>
              <motion.a
                initial={iconAnimationConfig.initial}
                animate={iconAnimationConfig.animate}
                transition={{ ...iconAnimationConfig.transition, delay: 1.5 }}
                href="https://wa.me/+6282126172854"
                target="_blank"
                rel="noreferrer"
                className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500"
              >
                <img className="md:h-11 h-8" src={dark ? WABlack : WA} alt="" />
              </motion.a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
