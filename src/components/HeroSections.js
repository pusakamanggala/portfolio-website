import React from "react";
import linkedin from "../icons/linkedin.png";
import github from "../icons/github.png";
import gmail from "../icons/gmail.png";

const HeroSections = () => {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" flex-row justify-center items-center w-full py-64">
        <h1 className="text-4xl text-white font-poppins mb-0 p-4">
          Hi, I'm <span className="text-slate-900 ">Pusaka Manggala</span>
          <br /> A Front End Web Developer
        </h1>
        <h1 className="text-base font-poppins text-white mx-auto lg:w-2/4">
          I'm a front-end web developer from Indonesia, specializing in building
          beautiful website user interfaces using React.Js and css framework
          like Bootstrap and Tailwind.
        </h1>
        <div className="flex justify-center h-60 items-center bg-teal-500">
          <a
            href="https://www.linkedin.com/in/pusakamanggala/"
            className="flex m-3 h-20 w-20 rounded-full bg-slate-900 justify-center items-center"
          >
            <img className="h-10" src={linkedin} alt="" />
          </a>
          <a
            href="https://github.com/pusakamanggala"
            className="flex m-3 h-20 w-20 rounded-full bg-slate-900 justify-center items-center"
          >
            <img className="h-10" src={github} alt="" />
          </a>
          <a
            href="mailto:pusakamanggala@gmail.com"
            className="flex m-3 h-20 w-20 rounded-full bg-slate-900 justify-center items-center"
          >
            <img className="h-10" src={gmail} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeroSections;
