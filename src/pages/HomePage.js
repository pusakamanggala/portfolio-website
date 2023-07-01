import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import HeroSections from "../components/HeroSections";
import ProjectsMenu from "../components/ProjectsMenu";
import SkillsList from "../components/SkillsList";
import { ThemeContext } from "../context/ThemeContext";
import { useScroll, motion, useSpring } from "framer-motion";

const HomePage = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress);
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(() => {
      setShowNavBar(true);
      setShowContent(true);
    }, 6000);
  }, []);

  return (
    <div className={` ${dark ? "dark" : ""} App relative bg-teal-500"`}>
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
          </section>{" "}
          {/* scroll indicator */}
          <motion.div
            style={{ scaleY }}
            className="bg-slate-900 h-full w-3 fixed top-0 right-0 dark:bg-teal-500 rounded-sm"
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
