import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import react from "../icons/react.png";
import reactBlack from "../icons/reactBlack.png";
import { ThemeContext } from "../context/ThemeContext";
import tailwind from "../icons/tailwind.png";
import tailwindBlack from "../icons/tailwindBlack.png";
import js from "../icons/js.png";
import jsBlack from "../icons/jsBlack.png";
import chartJs from "../icons/chartjs.png";
import reactQuery from "../icons/reactQuery.png";
import HomePageImg from "../img/Projects/SatisfactionSurveyWebsite/HomePage.png";
import SurveyResultImg from "../img/Projects/SatisfactionSurveyWebsite/SurveyResultPage.png";
import LoginPageImg from "../img/Projects/SatisfactionSurveyWebsite/LoginPage.png";

const SatisfactionSurveyWebsiteDetail = ({ isOpen, setIsOpen }) => {
  const { dark } = useContext(ThemeContext);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  useEffect(() => {
    // Disable scrolling when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handlePopstate = () => {
      setIsOpen(false);
    };

    // Add event listeners for ESC key and popstate
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopstate);

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, [isOpen, setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 h-dvh w-screen bg-black/25 backdrop-blur-sm bg-opacity-30 text-slate-900 dark:text-white"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
        >
          <motion.div
            className="bg-teal-500 dark:bg-slate-900 rounded-lg p-4 md:h-5/6 md:w-5/6 h-full w-full overflow-auto border-4 dark:border-teal-300 border-slate-900 relative"
            variants={modalVariants}
          >
            <div className="bg-black flex justify-end">
              <button
                className="fixed dark:bg-teal-300 bg-slate-900 w-6 rounded-full z-50 text-white dark:text-black"
                onClick={handleClose}
              >
                X
              </button>
            </div>
            {/* Project Title */}
            <div className="">
              <h1 className="text-left text-xl w-3/4">
                <span className="dark:text-teal-300">
                  Satisfaction Survey Website
                </span>
              </h1>
            </div>
            {/* Screenshot */}
            <div className="flex justify-center my-20">
              <div className="grid grid-cols-2 gap-7 relative items-center">
                <motion.img
                  className="w-96 rounded-md"
                  src={LoginPageImg}
                  alt=""
                  variants={{
                    hidden: { x: "-500%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 0.5 }}
                />
                <motion.img
                  className="w-96 rounded-md"
                  src={HomePageImg}
                  alt=""
                  variants={{
                    hidden: { x: "500%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 0.5 }}
                />
                <img
                  className="absolute w-2/3 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md shadow-black shadow-sm"
                  src={SurveyResultImg}
                  alt=""
                />
              </div>
            </div>
            {/* Techs */}
            <div className="text-left mb-5">
              <h2 className="text-lg dark:text-teal-300">Technologies :</h2>
              <div className="flex">
                <div className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                  <img
                    className="md:h-10 h-8"
                    src={dark ? jsBlack : js}
                    alt=""
                    title="JavaScript"
                  />
                </div>
                <div className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                  <img
                    className="md:h-10 h-8"
                    src={dark ? reactBlack : react}
                    alt=""
                    title="ReactJS"
                  />
                </div>
                <div className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                  <img
                    className="md:h-10 h-8"
                    src={dark ? tailwindBlack : tailwind}
                    alt=""
                    title="TailwindCSS"
                  />
                </div>
                <div className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                  <img
                    className="md:h-10 h-8"
                    src={reactQuery}
                    alt=""
                    title="React Query"
                  />
                </div>
                <div className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                  <img
                    className="md:h-12 h-10"
                    src={chartJs}
                    alt=""
                    title="Chartjs"
                  />
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="text-left">
              <h2 className="text-lg dark:text-teal-300">Description :</h2>
              <p className="text-justify mb-2">
                Student satisfaction survey website, lecturers, and tracer study
                is a website that serves to collect responses or feedback from
                students, lecturers, and alumni for the purposes of evaluating
                the quality of education. This website is a case study of UIN
                Malang Mathematics study program and as my final project at S1
                Computer Engineering Telkom University.
              </p>
              <p className="text-justify">
                Administrators have the capability to manage website users,
                create new surveys, and view the results of conducted surveys.
                And regular users can fill the available surveys and view their
                survey history.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SatisfactionSurveyWebsiteDetail;
