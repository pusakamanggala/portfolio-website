import React from "react";
import TwoForGame from "../img/24Game.jpg";
import Workspot from "../img/Workspot.jpg";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ProjectsMenu = () => {
  const { dark } = React.useContext(ThemeContext);

  return (
    <div className={`${dark && "dark"}`}>
      <div className="md:pt-24 pt-16 bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <h1 className="text-2xl md:text-4xl text-slate-900 font-poppins mb-0 dark:text-white">
          Projects
        </h1>
        <div className="flex py-20 justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              className="w-72 h-96 bg-slate-400 rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:animate-pulse cursor-pointer"
            >
              <h1 className="w-full bg-slate-900 dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400 ">
                24 Game <br /> Mobile Game App
              </h1>
              <img src={TwoForGame} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-72 h-96 bg-slate-400 rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:animate-pulse cursor-pointer"
            >
              <h1 className="w-full bg-slate-900  dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                WorkSpot <br /> Job Requirements Website
              </h1>
              <img src={Workspot} alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:animate-pulse cursor-pointer"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:animate-pulse cursor-pointer"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2 }}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:animate-pulse cursor-pointer"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:animate-pulse cursor-pointer"
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMenu;
