import React, { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import react from "../icons/react.png";
import reactBlack from "../icons/reactBlack.png";
import { ThemeContext } from "../context/ThemeContext";
import js from "../icons/js.png";
import jsBlack from "../icons/jsBlack.png";
import axios from "../icons/axios.png";
import axiosBlack from "../icons/axiosBlack.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tailwind from "../icons/tailwind.png";
import tailwindBlack from "../icons/tailwindBlack.png";
import vite from "../icons/vite.png";

const ANDashboardDetail = ({ isOpen, setIsOpen }) => {
  const { dark } = useContext(ThemeContext);

  const sliderSettings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    // show dots when screen is larger than 768px
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          dots: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          cssEase: "linear",
        },
      },
    ],
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

  const images = [...Array(22).keys()].map((i) =>
    require(`../img/Projects/ANDashboard/an-dashboard.netlify.app_dashboard(${
      i - 1
    }).webp`)
  );

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
            className="bg-teal-500 dark:bg-slate-900 rounded-lg md:h-5/6 md:w-5/6 h-full w-full border-4 dark:border-teal-300 border-slate-900 flex flex-col"
            variants={modalVariants}
          >
            {/* Project Title */}
            <div className="flex justify-between w-full p-4 items-center border-b">
              <h1 className="text-xl max-w-[80%] text-left">
                <span className="dark:text-teal-300">Dashboard</span> | Adaptive
                Network laboratory
              </h1>
              <button
                title="Close"
                type="button"
                className="dark:bg-teal-300 bg-slate-900 w-6 h-6 rounded-full text-white dark:text-black"
                onClick={handleClose}
              >
                X
              </button>
            </div>
            <section className="p-4 flex-1 overflow-y-auto space-y-6">
              {/* Screenshot */}
              <div className="md:mx-20 mb-10 ">
                <Slider {...sliderSettings} className="md:mx-20 mx-7 p-2">
                  {images.map((image, index) => (
                    <div key={index} className="px-2">
                      <img className="rounded-md" src={image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
              {/* Project Duration */}
              <div className="text-left">
                <h2 className="text-base dark:text-teal-300">
                  Project Duration :{" "}
                  <span className="dark:text-white text-slate-900">
                    Sep 23 - Nov 23
                  </span>
                </h2>
              </div>
              {/* Techs */}
              <div className="text-left">
                <h2 className="text-lg dark:text-teal-300">Technologies :</h2>
                <div className="flex">
                  <div className="flex m-3 h-12 md:h-20 aspect-square rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                    <img
                      className="md:h-10 h-7"
                      src={dark ? jsBlack : js}
                      alt=""
                      title="JavaScript"
                    />
                  </div>
                  <div className="flex m-3 h-12 md:h-20 aspect-square rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                    <img
                      className="md:h-10 h-7"
                      src={dark ? reactBlack : react}
                      alt=""
                      title="ReactJS"
                    />
                  </div>
                  <div className="flex m-3 h-12 md:h-20 aspect-square rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                    <img
                      className="md:h-10 h-7"
                      src={vite}
                      alt=""
                      title="Vite"
                    />
                  </div>
                  <div className="flex m-3 h-12 md:h-20 aspect-square rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                    <img
                      className="md:h-10 h-7"
                      src={dark ? tailwindBlack : tailwind}
                      alt=""
                      title="TailwindCSS"
                    />
                  </div>
                  <div className="flex m-3 h-12 md:h-20 aspect-square rounded-full bg-slate-900 dark:bg-white justify-center items-center dark:shadow-teal-400 shadow-teal-900 shadow-md transition-opacity duration-500">
                    <img
                      className="md:h-4 h-2"
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
                  This application emerged as an innovative project from
                  Adaptive Network laboratory assistants at Telkom University,
                  with the main purpose as a research resource, laboratory
                  profiling, operational management of laboratory activities,
                  and other functions that support research development. Through
                  the implementation of advanced microservices architecture,
                  best practices in Continuous Integration/Continuous Deployment
                  (CI/CD), and efficient private cloud management, the entire
                  process is run independently by a team of assistants and
                  external contributors.
                </p>
                <p className="text-justify mb-2">
                  The AN-Dashboard application not only provides a platform for
                  laboratory research needs, but also provides features that
                  support the daily operations of the laboratory. These include
                  content management for the front page of the website, a
                  laboratory equipment loan system, and the ability to
                  independently deploy applications into a Kubernetes cluster
                  through self-service features.
                </p>
                <p className="text-justify">
                  Looking ahead, AN-Dashboard is expected to become a platform
                  that is fully integrated with the entire suite of technologies
                  used in the laboratory. The vision is to become an end-to-end
                  control center, connecting and optimizing every element in the
                  lab, creating an efficient and unified ecosystem to support
                  continuous exploration and innovation.
                </p>
              </div>
              {/* Demo Video */}
              <div className="flex justify-center">
                {/* youtube video here */}
                <iframe
                  width="853"
                  height="480"
                  className="rounded-md"
                  src={`https://www.youtube.com/embed/zK7U9QSSoOU`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
              {/* API */}
              <div className="text-left">
                <h2 className="text-lg">Back End and Desain by : </h2>
                <ul className="list-disc list-inside">
                  <li>
                    <a
                      href="https://github.com/nvlannasik"
                      target="_blank"
                      rel="noreferrer"
                      className="underline dark:text-teal-300 text-blue-800"
                    >
                      Ahmad Naoval Annasik
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/adaptivenetworklab"
                      target="_blank"
                      rel="noreferrer"
                      className="underline dark:text-teal-300 text-blue-800"
                    >
                      Adaptive Network Laboratory
                    </a>
                  </li>
                </ul>
              </div>
              {/* Links */}
              <div className="text-left">
                <h2 className="text-lg">Links :</h2>
                <ul className="list-disc list-inside">
                  <li>
                    <a
                      href="https://github.com/pusakamanggala/an-dashboard.git"
                      target="_blank"
                      rel="noreferrer"
                      className="underline dark:text-teal-300 text-blue-800"
                    >
                      Source Code
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://an-dashboard.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                      className="underline dark:text-teal-300 text-blue-800"
                    >
                      Live Demo
                    </a>
                  </li>
                </ul>
                <p className="mt-3 ">Viewer Account:</p>
                <ul className="dark:text-teal-300">
                  <li>username : pusakalah3</li>
                  <li>password : pusakalah123</li>
                </ul>
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ANDashboardDetail;
