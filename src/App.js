import React, { useState } from "react";
import ProjectSideBar from "./components/ProjectsSideBar";
import "./App.css";
import NewProject from "./components/NewProjects";
import WelcomePage from "./components/welcomePage";
import ProjectDisplay from "./components/projects/projectDisplay";

function App() {
  const [addingNewProject, setAddingNewProject] = useState(false);
  const [projectSelected, setProjectSelected] = useState(false);
  let displayingProject;
  function openingNewProject() {
    setAddingNewProject(true);
  }
  function closingNewProjectForm() {
    setAddingNewProject(false);
  }
  function displayingProjectHandler(data) {
    console.log("in", data);
    setProjectSelected(true);
    displayingProject = <ProjectDisplay project={data} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        newProject={openingNewProject}
        veiwingProject={displayingProjectHandler}
      />
      {projectSelected && displayingProject}
      {/* <ProjectDisplay project={data[0]} /> */}
      {!addingNewProject && <WelcomePage newProject={openingNewProject} />}
      {addingNewProject && <NewProject cancelButton={closingNewProjectForm} />}
    </main>
  );
}

export default App;
