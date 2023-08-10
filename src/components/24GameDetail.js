import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlashScreenImg from "../img/Projects/24Game/FlashScreen.png";
import GameplayImg from "../img/Projects/24Game/Gameplay.png";
import HomeImg from "../img/Projects/24Game/Home.png";
import react from "../icons/react.png";
import reactBlack from "../icons/reactBlack.png";
import { ThemeContext } from "../context/ThemeContext";
import reactNavigation from "../icons/reactNavigation.png";
import js from "../icons/js.png";
import jsBlack from "../icons/jsBlack.png";
import axios from "../icons/axios.png";
import axiosBlack from "../icons/axiosBlack.png";

const TwoFourGameDetail = ({ isOpen, setIsOpen }) => {
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
              <h1 className="text-left text-xl w-3/4">
                <span className="dark:text-teal-300">24 Game</span> | Mobile
                Game App
              </h1>
            </div>
            {/* Screenshot */}
            <div className="flex justify-center my-20">
              <div className="grid grid-cols-3 md:gap-7 items-center ">
                <motion.img
                  className="w-32 rounded-md mx-auto"
                  src={HomeImg}
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
                  className="w-40 rounded-md mx-auto"
                  src={FlashScreenImg}
                  alt=""
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
                />
                <motion.img
                  className="w-32 rounded-md mx-auto"
                  src={GameplayImg}
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
                    src={reactNavigation}
                    alt=""
                    title="React Navigation"
                  />
                </div>
                <div className="flex m-3 h-14 w-14 md:h-20 md:w-20 rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                  <img
                    className="md:h-4 h-3 "
                    src={dark ? axiosBlack : axios}
                    alt=""
                    title="Axios"
                  />
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="text-left">
              <h2 className="text-lg dark:text-teal-300">Description :</h2>
              <p className="text-justify mb-2">
                The 24 Game is a mathematical puzzle where players are given a
                deck of cards and the goal is to use the values on those cards
                to create an equation that equals 24. The deck consists of four
                numbers, and players must apply simple mathematical operations
                such as addition (+), subtraction (-), multiplication (×), and
                division (÷) to combine the numbers and achieve the target value
                of 24.
              </p>
              <p className="text-justify mb-2">
                Each card in the deck has a specific value. The Ace (A) has a
                value of 11, while the King (K), Queen (Q), and Jack (J) each
                have a value of 10. The remaining cards, numbered 2 to 10, hold
                their face value.
              </p>
              <p className="text-justify">
                To solve the puzzle, players must strategically select and
                arrange the cards in a way that allows them to perform
                calculations leading to the target value of 24. The operations
                must follow the rules of mathematical operations, and players
                should consider the order of operations to obtain the correct
                result.
              </p>
            </div>
            {/* API */}
            <div className="text-left mt-5">
              <h2 className="text-lg">
                API :{" "}
                <ul className="list-disc list-inside">
                  <li>
                    {" "}
                    <a
                      href="https://www.deckofcardsapi.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="underline dark:text-teal-300 text-blue-800"
                    >
                      Deck of Card
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/neojarma/24-Game-API"
                      target="_blank"
                      rel="noreferrer"
                      className="underline dark:text-teal-300 text-blue-800"
                    >
                      24 Game Solver
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
                    href="https://github.com/pusakamanggala/24-Game"
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

export default TwoFourGameDetail;
