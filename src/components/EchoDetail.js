import React, { useEffect, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import react from "../icons/react.png";
import reactBlack from "../icons/reactBlack.png";
import { ThemeContext } from "../context/ThemeContext";
import tailwind from "../icons/tailwind.png";
import tailwindBlack from "../icons/tailwindBlack.png";
import js from "../icons/js.png";
import jsBlack from "../icons/jsBlack.png";
import vite from "../icons/vite.png";
import ArtistPage from "../img/Projects/Echo/ArtistPage.webp";
import HomePage from "../img/Projects/Echo/HomePage.webp";
import PlaylistsPage from "../img/Projects/Echo/PlaylistsPage.webp";
import reactQuery from "../icons/reactQuery.png";

const EchoDetail = ({ isOpen, setIsOpen }) => {
  const { dark } = useContext(ThemeContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

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
            </div>{" "}
            {/* Project Title */}
            <div className="">
              <h1 className="text-left text-xl w-3/4">
                <span className="dark:text-teal-300">Echo</span> | Spotify App
                Clone
              </h1>
            </div>
            {/* Screenshot */}
            <div className="flex justify-center my-20">
              <div className="grid grid-cols-2 gap-7 relative items-center">
                <motion.img
                  className="w-96 rounded-md"
                  src={ArtistPage}
                  alt=""
                  onLoad={handleImageLoad}
                  variants={{
                    hidden: { x: "-500%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial={isImageLoaded ? "visible" : "hidden"}
                  animate={isImageLoaded ? "visible" : "hidden"}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                />
                <motion.img
                  className="w-96 rounded-md"
                  src={PlaylistsPage}
                  alt=""
                  onLoad={handleImageLoad}
                  variants={{
                    hidden: { x: "500%", opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  initial={isImageLoaded ? "visible" : "hidden"}
                  animate={isImageLoaded ? "visible" : "hidden"}
                  transition={{ ease: "easeOut", duration: 0.5 }}
                />
                <motion.img
                  className="absolute w-2/3 left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-md shadow-black shadow-sm"
                  src={HomePage}
                  alt=""
                  onLoad={handleImageLoad}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial={isImageLoaded ? "visible" : "hidden"}
                  animate={isImageLoaded ? "visible" : "hidden"}
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
                  <img className="md:h-10 h-8" src={vite} alt="" title="Vite" />
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
              </div>
            </div>
            {/* Description */}
            <div className="text-left">
              <h2 className="text-lg dark:text-teal-300">Description :</h2>
              <p className="text-justify mb-2">
                Echo is a web application that allows users to explore tracks,
                artists, playlists, albums, and more from the Spotify music
                catalog. It utilizes the Spotify Web API for developers to
                provide a seamless music exploration experience. Users can
                search for their favorite songs, discover new artists,
                playlists, and albums.
              </p>
              <p className="text-justify">
                Please note: While you can interact with the player's controls,
                it won't play actual songs due to technical constraints. For an
                immersive music streaming experience, it is recommended to use
                official Spotify music streaming platforms for full song
                playback and audio streaming.
              </p>
            </div>
            {/* API */}
            <div className="text-left mt-5">
              <h2 className="text-lg">
                Music API by :{" "}
                <a
                  href="https://developer.spotify.com/documentation/web-api"
                  target="_blank"
                  rel="noreferrer"
                  className="underline dark:text-teal-300 text-blue-800"
                >
                  Spotify Web Api
                </a>
              </h2>
              <h2 className="text-lg">
                Track Lyrics API by :{" "}
                <a
                  href="https://github.com/akashrchandran/spotify-lyrics-api"
                  target="_blank"
                  rel="noreferrer"
                  className="underline dark:text-teal-300 text-blue-800"
                >
                  Akash R Chandran
                </a>
              </h2>
            </div>
            {/* Links */}
            <div className="text-left mt-5">
              <h2 className="text-lg">Links:</h2>
              <ul className="list-disc list-inside">
                <li>
                  <a
                    href="https://echo-spotify-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline dark:text-teal-300 text-blue-800"
                  >
                    Live Site
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/pusakamanggala/echo-music-app"
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

export default EchoDetail;
