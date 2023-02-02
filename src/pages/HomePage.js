import React from "react";
import Navbar from "../components/Navbar";
import HeroSections from "../components/HeroSections";
import ProjectsMenu from "../components/ProjectsMenu";
import { ThemeProvider } from "../context/ThemeContext";
import SkillsList from "../components/SkillsList";

const HomePage = () => {
  return (
    <ThemeProvider>
      <div className="App bg-teal-500 ">
        <Navbar />
        <section id="HeroSection">
          <HeroSections />
        </section>

        <section id="Project">
          <ProjectsMenu />
        </section>
        <section id="Skills">
          <SkillsList />
        </section>
      </div>
    </ThemeProvider>
  );
};
export default HomePage;
