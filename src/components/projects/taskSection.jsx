import { useState, useEffect, useContext } from "react";
import NewTask from "./NewTask";
import ProjectContext from "../store/project-context";

function TaskSection({ projectBeingDisplay, newTaskAddition }) {
  const context = useContext(ProjectContext);

  const projectToDisplay = context.items.filter(
    (item) => item.id === projectBeingDisplay.id
  );
  const [haveTask, setHaveTask] = useState(false);
  useEffect(() => {
    setHaveTask(projectToDisplay[0].task.length === 0 ? true : false);
  }, [projectToDisplay]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask
        task={(newTask) => {
          newTaskAddition(newTask);
        }}
      />
      {haveTask && <p>no task</p>}
      {!haveTask && (
        <ul>
          {projectToDisplay[0].task.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      )}
    </section>
  );
}

export default TaskSection;
