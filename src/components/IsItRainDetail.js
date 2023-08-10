import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import react from "../icons/react.png";
import reactBlack from "../icons/reactBlack.png";
import { ThemeContext } from "../context/ThemeContext";
import js from "../icons/js.png";
import jsBlack from "../icons/jsBlack.png";
import Tokyo from "../img/Projects/IsItRain/Tokyo.gif";
import Jakarta from "../img/Projects/IsItRain/Jakarta.gif";
import Toronto from "../img/Projects/IsItRain/Toronto.gif";
import lottie from "../icons/lottie.png";
import reactQuery from "../icons/reactQuery.png";

const IsItRainDetail = ({ isOpen, setIsOpen }) => {
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

    // Add event listener for ESC key
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
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
            {/* Project Title */}
            <div className="bg-black flex justify-end">
              <button
                className="fixed dark:bg-teal-300 bg-slate-900 w-6 rounded-full z-50 text-white dark:text-black"
                onClick={handleClose}
              >
                X
              </button>
            </div>
            <div className="">
              <h1 className="text-left text-xl">
                <span className="dark:text-teal-300">Is-it-rain</span> | Weather
                Forecast Website
              </h1>
            </div>
            {/* Screenshot */}
            <div className="flex justify-center my-20">
              <div className="grid grid-cols-3 gap-3 md:gap-7 items-center ">
                <motion.img
                  className="md:w-56 w-36 rounded-xl mx-auto shadow-md dark:shadow-teal-300"
                  src={Toronto}
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
                  className="md:w-72 w-36 rounded-xl mx-auto shadow-md dark:shadow-teal-300"
                  src={Tokyo}
                  alt=""
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
                />
                <motion.img
                  className="md:w-56 w-36 rounded-xl mx-auto shadow-md dark:shadow-teal-300"
                  src={Jakarta}
                  alt=""
                  variants={{
                    hidden: { x: "500%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ ease: "easeOut", duration: 0.5 }}
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
                    src={reactQuery}
                    alt=""
                    title="React Query"
                  />
                </div>
                <div className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                  <img
                    className="md:h-10 h-8"
                    src={lottie}
                    alt=""
                    title="Lottie"
                  />
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="text-left">
              <h2 className="text-lg dark:text-teal-300 ">Description :</h2>
              <p className="text-justify mb-2 ">
                Is-It-Rain is a weather forecast website that allows users to
                view weather predictions for a specific city or country. Users
                can input the desired location, and the website will provide
                them with relevant weather information.
              </p>
              <p className="text-justify mb-2">
                The website features 10 animated icons that dynamically change
                based on the weather conditions and the time of day in the
                specified location. These icons represent various weather
                conditions such as rain, sunny, cloudy, snow, and more.
              </p>
              <p className="text-justify">
                In addition to the animated icons, Is-It-Rain displays detailed
                weather information including the type of weather (such as rain,
                sunny, cloudy, etc.), temperature, humidity, and wind speed.
                This information gives users a comprehensive overview of the
                weather conditions in their chosen location. This website has a
                very simple design, making it easy to use.
              </p>
            </div>
            {/* API */}
            <div className="text-left mt-5">
              <h2 className="text-lg">
                API :
                <ul className="list-disc list-inside">
                  <li>
                    <a
                      href="https://openweathermap.org/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline dark:text-teal-300 text-blue-800"
                    >
                      Weather API
                    </a>
                  </li>
                </ul>
              </h2>
            </div>
            {/* Links */}
            <div className="text-left mt-5">
              <h2 className="text-lg">Links:</h2>
              <ul className="list-disc list-inside">
                <li>
                  <a
                    href="https://is-it-rain.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline dark:text-teal-300 text-blue-800"
                  >
                    Live Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pusakamanggala/weather-app"
                    target="_blank"
                    rel="noreferrer"
                    className="underline dark:text-teal-300 text-blue-800"
                  >
                    Source Code
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IsItRainDetail;
