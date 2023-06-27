import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSections from "../components/HeroSections";
import ProjectsMenu from "../components/ProjectsMenu";
import { ThemeProvider } from "../context/ThemeContext";
import SkillsList from "../components/SkillsList";

const HomePage = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowNavBar(true);
      setShowContent(true);
    }, 4000);
  }, []);

  return (
    <ThemeProvider>
      <div className="App bg-teal-500 ">
        {showNavBar && <Navbar />}
        <section id="HeroSection">
          <HeroSections />
        </section>
        {showContent && (
          <>
            <section id="Project">
              <ProjectsMenu />
            </section>
            <section id="Skills">
              <SkillsList />
            </section>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};
export default HomePage;
