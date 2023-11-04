import React, { useContext } from "react";

import ProjectContext from "../store/project-context";
import TaskSection from "./taskSection";
//this component will get only one project detials as the props
// the one that would be selected
function ProjectDisplay({ project }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const context = useContext(ProjectContext);

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={() => context.removeItem(project.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-warp">
          {project.description}
        </p>
      </header>
      <TaskSection />
    </div>
  );
}

export default ProjectDisplay;
