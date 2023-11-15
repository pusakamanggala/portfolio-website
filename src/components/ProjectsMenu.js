import React, { useState } from "react";
import Workspot from "../img/Workspot.jpg";
import WeatherApp from "../img/WeatherApp.png";
import Echo from "../img/Echo.webp";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import ANDashboardDetail from "./ANDashboardDetail";
import WorkSpotDetail from "./WorkSpotDetail";
import IsItRainDetail from "./IsItRainDetail";
import Recipefy from "../img/Recipefy.jpg";
import SurveyWebsite from "../img/SurveyWebsite.jpg";
import ANDashboard from "../img/ANDashboard.jpg";
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
      case "Adaptive Network Laboratory":
        return <ANDashboardDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "WorkSpot":
        return <WorkSpotDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "Is-it-rain":
        return <IsItRainDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "Recipefy":
        return <RecipefyDetail isOpen={isOpen} setIsOpen={setIsOpen} />;
      case "Satisfaction Survey Website":
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

  const projectData = [
    {
      title: "Adaptive Network Laboratory",
      image: ANDashboard,
      description: "Dashboard",
      animationDelay: 0.5,
    },
    {
      title: "Satisfaction Survey Website",
      image: SurveyWebsite,
      description: "Case Study of UIN Malang",
      animationDelay: 1,
    },
    {
      title: "Echo",
      image: Echo,
      description: "Spotify App Clone",
      animationDelay: 1.5,
    },
    {
      title: "WorkSpot",
      image: Workspot,
      description: "Job Requirements Website",
      animationDelay: 2,
    },
    {
      title: "Recipefy",
      image: Recipefy,
      description: "Cooking Recipe Website",
      animationDelay: 2.5,
    },
    {
      title: "Is-it-rain",
      image: WeatherApp,
      description: "Weather Forecast Website",
      animationDelay: 3,
    },
  ];

  return (
    <div className={`${dark && "dark"}`}>
      <div className="md:pt-40 pt-16 bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <h1 className="text-2xl text-center md:text-4xl text-slate-900  mb-0 dark:text-white">
          Projects
        </h1>
        <div className="flex pt-20 justify-center">
          <div className="grid text-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-4xl w-full">
            {renderProjectDetail()}
            {projectData &&
              projectData.map((project) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: project.animationDelay }}
                  onClick={() => selectProject(project.title)}
                  className="w-72 h-96 bg-slate-400 mx-auto rounded-2xl overflow-hidden shadow-md shadow-teal-900 hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col border-4 dark:border-teal-300 border-slate-900"
                >
                  <div className="h-4/5 w-full flex-1 bg-white">
                    <img
                      className="object-cover h-full w-full object-top"
                      src={project.image}
                      alt=""
                    />
                  </div>
                  <div className="h-1/5 w-full">
                    <h1 className="bg-slate-900 dark:bg-teal-300 p-3 h-full text-white font-semibold dark:text-slate-900">
                      {project.title} <br /> {project.description}
                    </h1>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMenu;
