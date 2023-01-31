import "./App.css";

import Navbar from "./components/Navbar";
import HeroSections from "./components/HeroSections";
import ProjectsMenu from "./components/ProjectsMenu";

function App() {
  return (
    <div className="App bg-teal-500 ">
      <Navbar ProjectID="Project" />
      <section id="HeroSection">
        <HeroSections />
      </section>

      <section id="Project">
        <ProjectsMenu />
      </section>
    </div>
  );
}

export default App;
