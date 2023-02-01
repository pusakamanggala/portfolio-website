import React from "react";
import TwoForGame from "../img/24Game.jpg";
import Workspot from "../img/Workspot.jpg";
import { ThemeContext } from "../context/ThemeContext";

const ProjectsMenu = () => {
  const { dark } = React.useContext(ThemeContext);
  return (
    <div className={`${dark && "dark"}`}>
      <div className="pt-40 bg-teal-500 dark:bg-slate-900 transition-all duration-700">
        <h1 className="text-4xl text-slate-900 font-poppins mb-0 dark:text-white">
          Projects
        </h1>
        <div className="flex py-20 justify-center ">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:max-w-4xl w-full">
            <div className="w-72 h-96 bg-slate-400 rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900">
              {/* <div className="w-full h-full bg-black absolute opacity-0 hover:opacity-90 p-6">
              <h1 className="text-white">
                Arithmetical game in which the objective is to find a way to
                manipulate four or six integers so that the end result is 24
              </h1>
            </div> */}
              <h1 className="w-full  bg-slate-900 dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                24 Game <br /> Mobile Game App
              </h1>
              <img src={TwoForGame} alt="" />
            </div>
            <div className="w-72 h-96 bg-slate-400 rounded-2xl mx-auto relative overflow-hidden shadow-md shadow-teal-900">
              <h1 className="w-full bg-slate-900  dark:bg-teal-300 absolute bottom-0 p-3 text-white font-semibold dark:text-slate-900 dark:shadow-teal-400">
                WorkSpot <br /> Job Requirements Website
              </h1>
              <img src={Workspot} alt="" />
            </div>
            <div className="w-72 h-96 bg-teal-100 rounded-2xl mx-auto shadow-md shadow-teal-900 dark:shadow-teal-400">
              {" "}
            </div>
            <div className="w-72 h-96 bg-teal-100 rounded-2xl mx-auto shadow-md shadow-teal-900 dark:shadow-teal-400">
              {" "}
            </div>
            <div className="w-72 h-96 bg-teal-100 rounded-2xl mx-auto shadow-md shadow-teal-900 dark:shadow-teal-400">
              {" "}
            </div>
            <div className="w-72 h-96 bg-teal-100 rounded-2xl mx-auto shadow-md shadow-teal-900 dark:shadow-teal-400">
              {" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsMenu;
