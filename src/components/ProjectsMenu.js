import React, { useState } from "react";
import TwoForGame from "../img/24Game.jpg";
import Workspot from "../img/Workspot.jpg";
import WeatherApp from "../img/WeatherApp.png";
import Echo from "../img/Echo.webp";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import TwoFourGameDetail from "./24GameDetail";
import WorkSpotDetail from "./WorkSpotDetail";
import IsItRainDetail from "./IsItRainDetail";
import Recipefy from "../img/Recipefy.jpg";
import SurveyWebsite from "../img/SurveyWebsite.jpg";
import RecipefyDetail from "./RecipefyDetail";
import SatisfactionSurveyWebsiteDetail from "./SatisfactionSurveyWebsiteDetail";
import EchoDetail from "./EchoDetail";

const ProjectsMenu = () => {
  const { dark } = React.useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const selectProject = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const renderProjectDetail = () => {
    switch (selectedProject) {
      case "24Game":
        return <TwoFourGameDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "Workspot":
        return <WorkSpotDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "IsItRain":
        return <IsItRainDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "Recipefy":
        return <RecipefyDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "SatisfactionSurveyWebsite":
        return (
          <SatisfactionSurveyWebsiteDetail
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        );
      case "Echo":
        return <EchoDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      // Render other project components based on selectedProject value
      default:
        return null;
    }
  };

  return (
    <div className={`${dark && "dark"}`}>
      <div className="md:pt-40 pt-16 bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <h1 className="text-2xl text-center md:text-4xl text-slate-900  mb-0 dark:text-white">
          Projects
        </h1>
        <div className="flex pt-20 justify-center">
          <div className="grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-4xl w-full">
            {renderProjectDetail()}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              onClick={() => selectProject("Workspot")}
              className="w-72 h-96 bg-slate-400 rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h1 className="w-full bg-slate-900  dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                WorkSpot <br /> Job Requirements Website
              </h1>
              <img
                className="border-4 dark:border-teal-300 border-slate-900 overflow-clip rounded-2xl"
                src={Workspot}
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              onClick={() => selectProject("24Game")}
              className="w-72 h-96 bg-slate-400 rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h1 className="w-full bg-slate-900 dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400 ">
                24 Game <br /> Mobile Game App
              </h1>
              <img
                className="border-4 dark:border-teal-300 border-slate-900 overflow-clip rounded-2xl"
                src={TwoForGame}
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              onClick={() => selectProject("IsItRain")}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:scale-105 transition-transform duration-300  cursor-pointer"
            >
              <h1 className="w-full bg-slate-900  dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                Is-it-rain <br /> Weather Forecast Website
              </h1>
              <img
                className="border-4 dark:border-teal-300 border-slate-900 overflow-clip rounded-2xl"
                src={WeatherApp}
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2 }}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:scale-105 transition-transform duration-300  cursor-pointer"
            >
              <img
                className="border-4 dark:border-teal-300 border-slate-900 overflow-clip rounded-2xl"
                src={Recipefy}
                alt=""
                onClick={() => selectProject("Recipefy")}
              />
              <h1 className="w-full bg-slate-900  dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                Recipefy <br /> Cooking Recipe Website
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:scale-105 transition-transform duration-300  cursor-pointer"
            >
              <img
                className="border-4 dark:border-teal-300 border-slate-900 overflow-clip rounded-2xl"
                src={SurveyWebsite}
                alt=""
                onClick={() => selectProject("SatisfactionSurveyWebsite")}
              />
              <h1 className="w-full bg-slate-900  dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                Satisfaction Survey Website <br />
                Case Study of UIN Malang
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="w-72 h-96 bg-white rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900 hover:scale-105 transition-transform duration-300  cursor-pointer"
            >
              <img
                className="border-4 dark:border-teal-300 border-slate-900 overflow-clip rounded-2xl"
                src={Echo}
                alt=""
                onClick={() => selectProject("Echo")}
              />
              <h1 className="w-full bg-slate-900  dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                Echo <br />
                Spotify App Clone
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMenu;
