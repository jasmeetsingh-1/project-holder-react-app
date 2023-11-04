import { useContext } from "react";
import ProjectContext from "./store/project-context";

function ProjectSideBar(props) {
  const context = useContext(ProjectContext);
  const data = context.items;
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md: w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md: text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          onClick={props.newProject}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add Projects
        </button>
      </div>
      <ul className="mt-8">
        {data.map((project) => {
          return (
            <li key={project.id}>
              <button
                className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400"
                onClick={() => {
                  props.veiwingProject(project);
                }}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectSideBar;
