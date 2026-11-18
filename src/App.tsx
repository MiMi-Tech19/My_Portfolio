import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects, { ProjectStory } from "./components/Projects";
import Contact from "./components/Contact";

type ProjectId = "ecommerce" | "huddle";

function getProjectFromHash(): ProjectId | null {
  if (window.location.hash === "#project-ecommerce") return "ecommerce";
  if (window.location.hash === "#project-huddle") return "huddle";
  return null;
}

function App() {
  const [activeProject, setActiveProject] = useState<ProjectId | null>(getProjectFromHash);

  useEffect(() => {
    const syncRoute = () => setActiveProject(getProjectFromHash());
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  useEffect(() => {
  if (activeProject) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }
}, [activeProject]);

  const backToProjects = () => {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#projects`);
    setActiveProject(null);
    requestAnimationFrame(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <Navbar />
      {activeProject ? (
        <main>
          <ProjectStory id={activeProject} onBack={backToProjects} />
        </main>
      ) : (
        <main>
          <Hero />
          <About />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </main>
      )}
    </>
  );
}

export default App;
