import React, { useState } from "react";
import ProjectSideBar from "./components/ProjectsSideBar";
import "./App.css";
import NewProject from "./components/NewProjects";
import WelcomePage from "./components/welcomePage";
import ProjectDisplay from "./components/projects/projectDisplay";
import CartProvider from "./components/store/cartProvider";

function App() {
  const [addingNewProject, setAddingNewProject] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  const [displayingProject, setDisplayingProject] = useState(null);

  function openingNewProject() {
    setProjectSelected(false);
    setAddingNewProject(true);
  }

  function closingNewProjectForm() {
    setAddingNewProject(false);
  }

  function displayingProjectHandler(data) {
    setAddingNewProject(false);
    setProjectSelected(true);
    setDisplayingProject(<ProjectDisplay project={data} />);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <CartProvider>
        <ProjectSideBar
          newProject={openingNewProject}
          veiwingProject={displayingProjectHandler}
        />
        {projectSelected && displayingProject}
        {!projectSelected && !addingNewProject && (
          <WelcomePage newProject={openingNewProject} />
        )}
        {addingNewProject && (
          <NewProject cancelButton={closingNewProjectForm} />
        )}
      </CartProvider>
    </main>
  );
}

export default App;
