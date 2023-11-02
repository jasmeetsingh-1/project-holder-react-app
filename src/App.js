import React, { useState } from "react";
import ProjectSideBar from "./components/ProjectsSideBar";
import "./App.css";
import NewProject from "./components/NewProjects";


function App() {
  const [addingNewProject, setAddingNewProject] = useState(false);
  function openingNewProject() {
    setAddingNewProject(true);
  }
  function closingNewProjectForm() {
    setAddingNewProject(false);
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar newProject={openingNewProject} />
      {addingNewProject && <NewProject cancelButton={closingNewProjectForm} />}
    </main>
  );
}

export default App;
